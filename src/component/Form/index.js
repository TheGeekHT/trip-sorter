// @flow

import React from 'react'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  ButtonGroup,
  Button,
} from 'react-bootstrap'

import './styles.css'

const Form = () =>
  <form>
    <FormGroup>
      <ControlLabel>From</ControlLabel>
      <FormControl />
    </FormGroup>
    <FormGroup>
      <ControlLabel>To</ControlLabel>
      <FormControl />
    </FormGroup>
    <FormGroup>
      <ButtonGroup justified>
        <Button href="#">Cheapest</Button>
        <Button href="#">Fastest</Button>
      </ButtonGroup>
    </FormGroup>
    <Button
      type="submit"
      bsSize="large"
      bsStyle="primary"
      block
    >
      <i className="glyphicon glyphicon-search" /> Search
    </Button>
  </form>

export default Form
