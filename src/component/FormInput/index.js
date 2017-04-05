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
  validationState: string,
}

const FormInput = ({ controlId, placeholder, label, value, validationState }: Props) =>
  <FormGroup
    controlId={controlId}
    validationState={validationState}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text"
      placeholder={placeholder}
      value={value}
    />
  </FormGroup>

export default FormInput
