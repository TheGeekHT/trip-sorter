// @flow

import React, { Component } from 'react'
import './styles.css'

import Header from '../component/Header'
import Form from '../component/Form'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header>Trip sorter</Header>
        <div className="app-content container">
          <Form />
        </div>
      </div>
    )
  }
}

export default App
