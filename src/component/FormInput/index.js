// @flow

import React from 'react'
import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap'

type Props = {
  controlId: string,
  placeholder?: string,
  label?: string,
  value?: string,
}

const FormInput = ({ controlId, placeholder, label, value }: Props) =>
  <FormGroup
    controlId={controlId}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text"
      placeholder={placeholder}
      value={value}
    />
  </FormGroup>

export default FormInput
