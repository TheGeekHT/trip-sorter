// @flow

import React, { Component } from 'react'

import DataFromServer from '../../api/response.json'
import PathFinder from '../util/path-finder'

import createTripRefMap from '../util/create-trip-ref-map'
import createCitiesList from '../util/create-cities-list'
import getTotalUnits from '../util/get-total-units'

import Header from '../component/Header'
import Form from '../component/Form'
import Trips from '../component/Trips'
import Icon from '../component/Icon'

import './styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      deals: [],
      tripRefMap: {},
      currency: '',
      citiesList: [],
      trips: [],
      from: '',
      to: '',
      type: '',
      loading: false,
      total: {},
    }
  }

  state: {
    deals: Array<Object>,
    tripRefMap: Object,
    currency: string,
    citiesList: Array<string>,
    trips: Array<Object>,
    from: string,
    to: string,
    type: string,
    loading: boolean,
    total: Object,
  };

  resetFilter() {
    this.setState({
      trips: [],
      from: '',
      to: '',
      type: ''
    })
  }

  handleSubmit({ from, to, type }: Object) {
    this.setState({ from, to, type, loading: true }, this.findBestTrip);
  }

  findBestTrip() {
    const { deals, from, to, type } = this.state;
    this.parseBestTrip( (new PathFinder(deals, from, to, type)).find() );
  }

  parseBestTrip(refs: Array<string>) {
    let trips: Array<Object> = [];
    refs.forEach(ref => trips.push(this.state.tripRefMap[ref]));
    let total: Object = getTotalUnits(trips);
    this.setState({ trips, total, loading: false });
  }

  // faking API response here
  static fakeApiCall() {
    return {
      response: DataFromServer
    }
  }

  componentWillMount() {
    const { deals, currency } = this.constructor.fakeApiCall().response; // must be async Promise handler in real conditions
    const tripRefMap = createTripRefMap(deals);
    const citiesList = createCitiesList(deals);
    this.setState({ deals, tripRefMap, currency, citiesList });
  }

  render() {
    const { trips, loading } = this.state;
    return (
      <div className="app">
        <Header><Icon type="glyphicon glyphicon-send" /> tripsorter</Header>
        <div className="app-content container">
          {
            loading ?
              <div className="loader">Loading...</div> :
              (trips.length ?
                <Trips handleReset={this.resetFilter.bind(this)} {...this.state} /> :
                <Form ref="form" handleSubmit={this.handleSubmit.bind(this)} {...this.state} />)
          }
        </div>
      </div>
    )
  }
}

export default App
