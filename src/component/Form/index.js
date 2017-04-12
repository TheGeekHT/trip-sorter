// @flow

import React, { Component } from 'react'

import { capitalize, trim } from '../../util/utils'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'
import FormError from '../FormError'

type Props = {
  handleSubmit: Function,
}

class Form extends Component {
  validate: Function;
  getValidationState: Function;
  state: {
    errors: Array<any>,
    validation: Object,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      errors: [],
      validation: {
        from: null,
        to: null,
        type: null,
      },
    };

    this.validate = this.validate.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  getValidationState(item: string) {
    let state = '';
    switch (this.state.validation[item]) {
      case 0:
        state = 'error';
        break;
      case 1:
        state = 'success';
        break;
      default:
        state = null;
        break;
    }
    return state;
  }

  validate(e: Event) {
    e.preventDefault()

    const { citiesList } = this.props;

    const formData = this.refs.data;
    const from = capitalize(trim(formData.elements['from'].value));
    const to = capitalize(trim(formData.elements['to'].value));
    const type = formData.type.value;

    let errors = [];
    let validation = {
      from: 1,
      to: 1,
      type: 1,
    };

    if (from.length === 0) {
      validation.from = 0;
      errors.push(`Please enter departure city.`);
    }
    if (to.length === 0) {
      validation.to = 0;
      errors.push(`Please enter arrival city.`);
    }
    if (citiesList.indexOf(from) === -1) {
      validation.from = 0;
      errors.push(`Invalid departure city.`);
    }
    if (citiesList.indexOf(to) === -1) {
      validation.to = 0;
      errors.push(`Invalid arrival city.`);
    }
    if (to === from) {
      validation.from = 0;
      validation.to = 0;
      errors.push('Departure and arrival city cannot be the same.');
    }
    if (!(type === 'cheapest' || type === 'fastest')) {
      validation.type = 0;
      errors.push('Incorrect trip type. Must be cheapest or fastest.');
    }

    this.setState({ errors, validation }, () => { if(!errors.length) this.props.handleSubmit({from, to, type}) });
  }

  render() {
    const {errors} = this.state;

    return (
      <form ref='data' onSubmit={this.validate}>
        <h2 className="header">Select your trip</h2>
        <FormInput
          autoFocus
          controlId="from"
          label="From"
          validationState={this.getValidationState('from')}
          options={this.props.citiesList}
        />
        <FormInput
          controlId="to"
          label="To"
          validationState={this.getValidationState('to')}
          options={this.props.citiesList}
        />
        <FormRadio
          options={[
                    {label: 'Cheapest', value: 'cheapest'},
                    {label: 'Fastest', value: 'fastest'},
                  ]}
        />
        <FormButton
          type="submit"
          bsStyle="info"
          label="SEARCH"
          icon="glyphicon glyphicon-search"
        />
        { errors.length ? <FormError title="ERROR" errors={errors}/> : '' }
      </form>
    )
  }
}

export default Form
