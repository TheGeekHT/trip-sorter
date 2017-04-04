// @flow

import React from 'react'

import TripCities from '../TripCities'
import TripDetails from '../TripDetails'
import TripPrice from '../TripPrice'

import './styles.css'

type Props = {
  item: Object,
  currency: string,
}

const Trip = ({ item, currency }: Props) =>
  <div className="trip-item">
    <div>
      <TripCities item={item} />
      <TripDetails item={item} />
    </div>
    <TripPrice item={item} currency={currency} />
  </div>

export default Trip
