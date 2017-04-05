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
      citiesList: [],
      trips: [],
      from: '',
      to: '',
      type: ''
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
  };

  handleSubmit({ from, to, type }: Object) {
    this.setState({ from, to, type }, this.findBestTrip);
  }

  resetFilter() {
    this.setState({
      trips: [],
      from: '',
      to: '',
      type: ''
    })
  }

  parseBestTrip(refs: Array<string>) {
    let trips: Array<Object> = [];
    refs.forEach(ref => trips.push(this.state.tripRefMap[ref]));
    this.setState({ trips });
  }

  findBestTrip() {
    const { deals, from, to, type } = this.state;
    this.parseBestTrip( (new PathFinder(deals, from, to, type)).find() );
  }

  static createTripRefMap(deals: Array<Object>) {
    let map = {};
    deals.forEach(item => map[item.reference] = item);
    return map;
  }

  static createCitiesList(deals: Array<Object>) {
    let addedList = [];
    let list = [];

    const addCity = (city) => {
      if(addedList.indexOf(city) === -1) {
        addedList.push(city);
        list.push(city);
      }
    };

    deals.forEach(item => {
      addCity(item.departure);
      addCity(item.arrival);
    });

    list.sort();

    return list;
  }

  // faking API response here
  static fakeApiCall() {
    return {
      response: DataFromServer
    }
  }

  componentWillMount() {
    const { deals, currency } = this.constructor.fakeApiCall().response; // must be async Promise handler in real conditions
    const tripRefMap = this.constructor.createTripRefMap(deals);
    const citiesList = this.constructor.createCitiesList(deals);
    this.setState({ deals, tripRefMap, currency, citiesList });
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
              <Form ref="form" handleSubmit={this.handleSubmit.bind(this)} {...this.state} />
          }
        </div>
      </div>
    )
  }
}

export default App
