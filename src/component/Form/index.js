// @flow

import React, { Component } from 'react'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'

import FindBestTrip from '../../util/find-best-trip'

type Props = {
  trips: Array<any>,
}

class Form extends Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      isResult: false,
    }
  }

  state: {
    isResult: boolean,
  }

  _handleSubmit() {
    FindBestTrip()
  }

  handleSubmit(e: Event) {
    e.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Select your trip</h2>
        <FormInput
          controlId="from"
          label="From"
        />
        <FormInput
          controlId="to"
          label="To"
        />
        <FormRadio
          options={[
        {label: 'Cheapest'},
        {label: 'Fastest'},
      ]}
        />
        <FormButton
          type="submit"
          bsStyle="primary"
          label="Search"
          icon="search"
        />
        {this._handleSubmit()}
      </form>
    )
  }
}

export default Form
