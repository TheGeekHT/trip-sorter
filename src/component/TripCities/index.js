// @flow

import React from 'react'

import './styles.css'

type Props = {
  item: Object,
}

const TripCities = ({ item }: Props) =>
  <div className="item-destination">{item.departure} - {item.arrival}</div>

export default TripCities
