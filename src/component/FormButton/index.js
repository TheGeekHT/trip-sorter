// @flow

import React from 'react'
import {
  FormGroup,
  Button,
} from 'react-bootstrap'
import Icon from '../Icon'

type Props = {
  type: string,
  bsStyle: string,
  icon?: string,
  label: string,
}

const FormButton = ({ type, bsStyle, icon, label }: Props) =>
  <FormGroup>
    <Button
      type={type}
      bsSize="large"
      bsStyle={bsStyle}
      block
    >
      {icon ? <Icon type={icon} /> : null} {label}
    </Button>
  </FormGroup>

export default FormButton
