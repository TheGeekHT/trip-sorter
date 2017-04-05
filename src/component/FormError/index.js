// @flow

import React from 'react'
import { Panel } from 'react-bootstrap'

import Icon from '../Icon'

type Props = {
  title: string,
  errors?: Array<string>,
}


const FormError = ({title, errors}: Props) => {
  const titleWrapper = <h2><Icon type="exclamation-sign" /> <strong>{title}</strong></h2>;

  return (
    <Panel header={titleWrapper} bsStyle="danger">
      <ul>
        {errors ? errors.map((err, i) => <li key={i}>{err}</li>) : '' }
      </ul>
    </Panel>
  )
};

export default FormError
