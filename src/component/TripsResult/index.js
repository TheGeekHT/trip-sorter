// @flow

import React from 'react'
import { Panel } from 'react-bootstrap'

import './styles.css'

type Props = {
  children?: typeof React.PropTypes.node,
  title: string,
}

const TripsResult = ({ title, children }: Props) => {
  const titleWrapper = (
    <h3>{title}</h3>
  )

  return (
    <div>
      <Panel header={titleWrapper} bsStyle="info">
        {children}
      </Panel>
    </div>
  )
}


export default TripsResult
