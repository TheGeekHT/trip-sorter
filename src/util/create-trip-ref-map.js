// @flow

const createTripRefMap = (deals: Array<Object>) => {
  let map = {};
  deals.forEach(item => map[item.reference] = item);
  return map;
};

export default createTripRefMap