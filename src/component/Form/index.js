// @flow

import React, { Component } from 'react'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'

type Props = {
  handleSubmit: Function,
}

class Form extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <form ref='from' onSubmit={this.props.handleSubmit}>
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
        {label: 'Cheapest', value: 'cheapest'},
        {label: 'Fastest', value: 'fastest'},
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
