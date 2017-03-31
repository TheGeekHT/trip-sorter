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
      data: DataFromServer
    }
  }

  state: {
    data: Object,
  }

  render() {
    const { data } = this.state
    return (
      <div className="app">
        <Header>Trip sorter</Header>
        <div className="app-content container">
          <Form />
          <Trips trips={data.deals} currency={data.currency} />
        </div>
      </div>
    )
  }
}

export default App
