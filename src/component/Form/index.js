// @flow

import React, { Component } from 'react'

import FormInput from '../FormInput'
import FormRadio from '../FormRadio'
import FormButton from '../FormButton'

type Props = {
  trips: Array<any>,
}

class Form extends Component {
  constructor(props: Props) {
    super(props)

    this.state = {
      isResult: false,
    }
  }

  state: {
    isResult: boolean,
  }

  _handleSubmit() {
    const Trips = this.props.trips

    const checkBanned = (banned, check) => banned.indexOf(check) === -1

    const filterTrips = (params: Object) => Trips.filter(item =>
      ((item.departure === params.from) && checkBanned(params.bannedTrips, item.arrival)))

    const getPrice = (item) => item.discount ? item.cost * item.discount / 100 : item.cost

    const logger = (name, currentPrice, currentTrip) => {
      console.group(name)
      console.log(currentPrice);
      currentTrip.forEach(item => console.log(`${item.departure} -> ${item.transport} -> ${item.arrival} | ${getPrice(item)}`))
      console.groupEnd()
    }

    let bestMatch = {
      result: Infinity,
      trip: [],
    }

    const Options = {}
    Options.from = 'Moscow'
    Options.to = 'Kiev'
    Options.type = 'cheapest'
    Options.bannedTrips = [Options.from]
    Options.result = 0

    const findBestTrip = (params: Object) => {
      const trips = filterTrips(params)
      trips.forEach(item => {
        let trip = params.currentTrip ? params.currentTrip : []
        let result = params.result

        trip.push(item)
        result += getPrice(item)

        logger('TRIP', result, trip)

        if (result < bestMatch.result) {
          if (item.arrival === params.to) {
            bestMatch = {
              result,
              trip: trip
            }
            logger('BEST', result, trip)
          } else {
            // const from = item.arrival
            // const to = Options.to
            // const type = Options.type
            // let bannedTrips = params.bannedTrips
            // if (checkBanned(bannedTrips, item.arrival)) bannedTrips.push(item.arrival)
            // if (item.departure === Options.from) {
            //   result = 0
            //   bannedTrips = [Options.from]
            // }
            //
            // const options = {
            //   from,
            //   to,
            //   type,
            //   bannedTrips,
            //   currentTrip,
            //   result
            // }
            //
            // findBestTrip(options)
          }
        }
      })
    }

    findBestTrip(Options)
    logger('BEST ALL', bestMatch.result, bestMatch.trip)
  }

  handleSubmit(e: Event) {
    e.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Select your trip</h2>
        <FormInput
          controlId="from"
          label="From"
        />
        <FormInput
          controlId="to"
          label="To"
        />
        <FormRadio
          options={[
        {label: 'Cheapest'},
        {label: 'Fastest'},
      ]}
        />
        <FormButton
          type="submit"
          bsStyle="primary"
          label="Search"
          icon="search"
        />
        {this._handleSubmit()}
      </form>
    )
  }
}

export default Form
