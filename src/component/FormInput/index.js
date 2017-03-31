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
}

const FormInput = ({ controlId, placeholder, label }: Props) =>
  <FormGroup
    controlId={controlId}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type="text"
      placeholder={placeholder}
    />
  </FormGroup>

export default FormInput
