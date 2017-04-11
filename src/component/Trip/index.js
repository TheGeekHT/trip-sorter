// @flow

import React, { Component } from 'react'

import { getCost } from '../../util/utils'
import Icon from '../Icon'

import './styles.css'

type Props = {
  item: Object,
  currency: string,
  title?: string,
}

class Trip extends Component {
  state: {
    title: string,
    cost: string,
    time: string,
    transport: string,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      title: '',
      cost: '',
      time: '',
      transport: '',
    }
  }

  componentWillMount() {
    const { item, currency } = this.props;
    const title = this.props.title ? this.props.title : this.props.item.departure;

    const cost = `${getCost(item)} ${currency}`;

    const time = `${item.duration.h}:${item.duration.m}`;

    const transport = item.transport;

    this.setState({ title, cost, time, transport })
  }

  render() {
    const { title, cost, time, transport } = this.state;
    return (
      <div className="trip-item">
        <div className="trip-item-title destination">{title}</div>
        {
          this.props.title ? '' :
            <div className="trip-item-details">
              <div className="trip-item-details-transport">
                <Icon type={`fa fa-fw fa-${transport}`} />
              </div>
              <div>
                <Icon type="glyphicon glyphicon-time" /> {time} &mdash; <span className="price">{cost}</span>
                </div>
            </div>
        }
      </div>
    )
  }
}

export default Trip
