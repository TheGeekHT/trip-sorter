// @flow

import React, { Component } from 'react'

import TripsResult from '../TripsResult'
import Trip from '../Trip'

type Props = {
  trips: Array<any>,
  currency: string,
}

class Trips extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { trips, currency } = this.props
    return (
      <div>
        <TripsResult title="The fastest route">
          Some content...
        </TripsResult>
        {
          trips.map((item, index) =>
            <Trip item={item} currency={currency} key={`${item.reference}`} />
          )
        }
      </div>
    )
  }
}

export default Trips
