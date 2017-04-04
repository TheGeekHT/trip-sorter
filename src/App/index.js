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
    super()

    this.state = {
      deals: [],
      currency: '',
      trips: [],
      // FIXME: just for testing
      from: 'Moscow',
      to: 'Kiev',
      type: 'cheapest'
      // FIXME: end ------------
    }
  }

  state: {
    deals: Array<Object>,
    currency: string,
    trips: Array<Object>,
    from: string,
    to: string,
    type: string,
  }

  // FIXME: uncomment event method
  findBestTrip(e: Event) {
    // e.preventDefault()
    console.log('ok', this.state)

    const { deals, from, to, type } = this.state
    const BestTrip = new PathFinder(deals, from, to, type)
    BestTrip.find()
  }

  // faking API response here
  fakeApiCall() {
    return {
      response: DataFromServer
    }
  }

  componentWillMount() {
    const serverResponse = this.fakeApiCall().response

    this.setState({
      deals: serverResponse.deals,
      currency: serverResponse.currency,
    })
  }

  render() {
    const { trips } = this.state
    return (
      <div className="app">
        <Header>Trip sorter</Header>
        <div className="app-content container">
          {
            trips.length ?
              <Trips {...this.state} /> :
              <Form handleSubmit={this.findBestTrip.bind(this)} {...this.state} />
          }
        </div>
      </div>
    )
  }
}

export default App
