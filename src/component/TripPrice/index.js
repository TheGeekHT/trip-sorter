// @flow

import React from 'react'

import './styles.css'

type Props = {
  item: Object,
  currency: string,
}

const TripPrice = ({ item, currency }: Props) =>
  <div className="item-price">{ item.cost * (1 - (item.discount / 100)) } {currency}</div>

export default TripPrice
