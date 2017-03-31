// @flow

import React, { Component } from 'react'

import './styles.css'

type Props = {
  trips: Array<any>,
  currency: string,
}

class Trips extends Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      isResult: false,
    }
  }

  state: {
    isResult: boolean,
  }

  render() {
    const { trips, currency } = this.props
    return (
      <div>
        <h2>The fastest trip</h2>
        {
          trips.map((item, index) =>
          <div className="trip-item" key={`${index}-${item.reference}`}>
            <div>
              <div className="destination">{item.departure} - {item.arrival}</div>
              <div className="details">
                It will take around <strong>{item.duration.h}h {item.duration.m}m</strong> by <strong>{item.transport}</strong>
                </div>
            </div>
            <div className="price">{item.cost} {currency}</div>
          </div>
          )
        }
      </div>
    )
  }
}


export default Trips
