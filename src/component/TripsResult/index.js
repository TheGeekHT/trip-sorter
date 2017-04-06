// @flow

import React from 'react'
import { Panel } from 'react-bootstrap'

import './styles.css'

type Props = {
  children?: typeof React.PropTypes.node,
}

const TripsResult = ({ children }: Props) =>
  <Panel bsStyle="info" className="result">
    {children}
  </Panel>


export default TripsResult
