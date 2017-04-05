// @flow

import React, { Component } from 'react'
import './styles.css'

import DataFromServer from '../../api/response.json'

import PathFinder from '../util/path-finder'

import Header from '../component/Header'
import Form from '../component/Form'
import Trips from '../component/Trips'

class App extends Component {
  constructor() {
    super();

    this.state = {
      deals: [],
      tripRefMap: {},
      currency: '',
      trips: [],
      // FIXME: just for testing
      from: 'Paris',
      to: 'Amsterdam',
      type: 'fastest'
      // FIXME: end ------------
    }
  }

  state: {
    deals: Array<Object>,
    tripRefMap: Object,
    currency: string,
    trips: Array<Object>,
    from: string,
    to: string,
    type: string,
  };

  parseBestTrip(refs: Array<string>) {
    let trips: Array<Object> = [];
    refs.forEach(ref => trips.push(this.state.tripRefMap[ref]));
    this.setState({
      trips
    });
  }

  findBestTrip() {
    const { deals, from, to, type } = this.state;
    const BestTrip = (new PathFinder(deals, from, to, type)).find();
    this.parseBestTrip(BestTrip)
  }

  static createTripRefMap(deals: Array<Object>) {
    let map = {};
    deals.forEach(item => map[item.reference] = item);
    return map;
  }

  handleSubmit(e: Event) {
    e.preventDefault()
    console.log(this);
  }

  resetFilter() {
    console.log('a');
    this.setState({
      trips: [],
      from: '',
      to: '',
      type: 'cheapest',
    })
  }

  // faking API response here
  static fakeApiCall() {
    return {
      response: DataFromServer
    }
  }

  componentWillMount() {
    const { deals, currency } = this.constructor.fakeApiCall().response;
    const tripRefMap = this.constructor.createTripRefMap(deals);

    this.setState({
      deals,
      tripRefMap,
      currency,
    });
  }

  render() {
    const { trips } = this.state;
    return (
      <div className="app">
        <Header>Trip sorter</Header>
        <div className="app-content container">
          {
            trips.length ?
              <Trips handleReset={this.resetFilter.bind(this)} {...this.state} /> :
              <Form handleSubmit={this.handleSubmit.bind(this)} {...this.state} />
          }
        </div>
      </div>
    )
  }
}

export default App
