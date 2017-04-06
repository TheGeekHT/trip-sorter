// @flow

import React from 'react'
import { Panel } from 'react-bootstrap'

import Icon from '../Icon'

import './styles.css'

type Props = {
  title: string,
  errors?: Array<string>,
}


const FormError = ({title, errors}: Props) => {
  const titleWrapper = <h2><Icon type="glyphicon glyphicon-exclamation-sign" /> <strong>{title}</strong></h2>;

  return (
    <Panel header={titleWrapper} bsStyle="danger">
      <ul className="errors">
        {errors ? errors.map((err, i) => <li className="error" key={i}>{err}</li>) : '' }
      </ul>
    </Panel>
  )
};

export default FormError
