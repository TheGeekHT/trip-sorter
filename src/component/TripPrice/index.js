// @flow

import React from 'react'

import './styles.css'

type Props = {
  item: Object,
  currency: string,
}

const TripPrice = ({ item, currency }: Props) =>
  <div className="price">{item.discount ? item.cost * item.discount / 100 : item.cost} {currency}</div>

export default TripPrice
