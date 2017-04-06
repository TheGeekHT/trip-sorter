// @flow

import React, { Component } from 'react'
import {
  FormGroup,
  ButtonGroup,
  Button,
} from 'react-bootstrap'

type Props = {
  options: Array<any>,
}

class FormRadio extends Component {
  handleClick: Function;
  isActive: Function;
  state: {
    value: string,
  };

  constructor(props: Props){
    super(props);

    this.state = {
      value: 'cheapest', // default type
    };

    this.handleClick = this.handleClick.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  handleClick(e: Event, value: string) {
    e.preventDefault();
    this.setState({ value }, () => { this.refs.type.value = this.state.value });
  }

  isActive = (value: string) => this.state.value === value;

  render() {
    const { options } = this.props;
    return (
      <FormGroup>
        <ButtonGroup justified>
          {
            options.map( item =>
              <Button
                className={ this.isActive(item.value) ? 'active' : '' }
                key={item.label}
                value={item.value}
                href="#"
                onClick={(e) => this.handleClick(e, item.value)}
              >
                {item.label}
              </Button>
            )
          }
        </ButtonGroup>
        <input ref="type" type="hidden" value={this.state.value} id="type" />
      </FormGroup>
    )
  }
}

export default FormRadio
