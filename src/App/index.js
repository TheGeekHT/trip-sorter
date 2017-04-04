// @flow

import React, { Component } from 'react'
import './styles.css'

import DataFromServer from '../../api/response.json'

import Header from '../component/Header'
import Form from '../component/Form'
import Trips from '../component/Trips'

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: DataFromServer,
      currency: DataFromServer.currency,
      trips: [
        DataFromServer.deals[0],
        DataFromServer.deals[1],
      ],
      from: '',
      to: ''
    }
  }

  state: {
    data: Object,
    currency: string,
    trips: Array<Object>,
  }

  render() {
    const { data, trips } = this.state
    return (
      <div className="app">
        <Header>Trip sorter</Header>
        <div className="app-content container">
          {
            trips.length ?
              <Trips {...this.state} /> :
              <Form trips={data.deals} />
          }
        </div>
      </div>
    )
  }
}

export default App
