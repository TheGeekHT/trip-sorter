// @flow

import { getCost } from './utils'

const getTotalUnits = (trips: Array<Object>) => {
  const MINUTES_IN_HOUR = 60;
  let total: Object = {
    cost: 0,
    time: {
      h: 0,
      m: 0,
    },
    transport: [],
    stops: 0,
  };

  trips.forEach(item => {

    total.cost += getCost(item);

    total.time.h += parseInt(item.duration.h, 10);
    total.time.m += parseInt(item.duration.m, 10);

    if (total.transport.indexOf(item.transport) === -1) total.transport.push(item.transport);

  });

  total.stops = trips.length - 1;

  if (total.time.m >= MINUTES_IN_HOUR) {
    total.time.h += Math.floor(total.time.m / MINUTES_IN_HOUR);
    total.time.m %= MINUTES_IN_HOUR;
  }

  return total;
};

export default getTotalUnits
