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

  // FIXME: remove later / just for testing
  componentDidMount() {
    this.props.handleSubmit()
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
