// @flow

import React from 'react'

import './styles.css'

type Props = {
  item: Object,
}

const TripDetails = ({ item }: Props) =>
  <div className="details">
    It will take around <strong>{item.duration.h}h {item.duration.m}m</strong> by <strong>{item.transport}</strong>
  </div>

export default TripDetails
