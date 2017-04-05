// @flow

import React, { Component } from 'react'

import { Button } from 'react-bootstrap'
import TripsResult from '../TripsResult'
import Trip from '../Trip'

type Props = {
  trips: Array<any>,
  currency: string,
  type: string,
  handleReset: Function,
}

class Trips extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { trips, currency, from, to, type } = this.props;
    return (
      <div>
        <TripsResult title={`The ${type} route`}>
          <p>
            Your journey from <strong>{from}</strong> to <strong>{to}</strong> will take around <strong>10 hours and 45 minutes</strong> and will cost you <strong>100 EUR</strong>. You'll have to travel by car, train and bus through 4 different cities.
          </p>
          <p>
            <Button onClick={this.props.handleReset}>Select new trip</Button> or see the details of your current trip below.
          </p>
        </TripsResult>
        {
          trips.map((item, index) => <Trip item={item} currency={currency} key={`${item.reference}`} />)
        }
      </div>
    )
  }
}

export default Trips
