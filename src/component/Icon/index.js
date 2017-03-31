// @flow

import React from 'react'

type Props = {
  type: string
}

const Icon = ({ type }: Props) =>
  <i className={`glyphicon glyphicon-${type}`} />

export default Icon
