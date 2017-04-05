// @flow

import React, { Component } from 'react'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'

type Props = {
  handleSubmit: Function,
}

class Form extends Component {
  validate: Function;

  constructor(props: Props) {
    super(props);

    this.validate = this.validate.bind(this);
  }

  validate(e: Event) {
    e.preventDefault();

    const formData = this.refs.data;
    const from = formData.from.value;
    const to = formData.to.value;
    const type = formData.type.value;

    this.props.handleSubmit({ from, to, type });
  }

  render() {
    return (
      <form ref='data' onSubmit={this.validate}>
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
