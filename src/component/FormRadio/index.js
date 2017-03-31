// @flow

import React from 'react'
import {
  FormGroup,
  ButtonGroup,
  Button,
} from 'react-bootstrap'

type Props = {
  options: Array<any>,
}

const FormRadio = ({ options }: Props) =>
  <FormGroup>
    <ButtonGroup justified>
      {
        options.map( item => <Button key={item.label} href="#">{item.label}</Button> )
      }
    </ButtonGroup>
  </FormGroup>

export default FormRadio
