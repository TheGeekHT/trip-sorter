// @flow

import React, { Component } from 'react'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'

type Props = {

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

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('ok')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
      </form>
    )
  }
}


export default Form
