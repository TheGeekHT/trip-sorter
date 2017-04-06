// @flow

const createCitiesList = (deals: Array<Object>) => {
  let addedList = [];
  let list = [];

  const addCity = (city) => {
    if(addedList.indexOf(city) === -1) {
      addedList.push(city);
      list.push(city);
    }
  };

  deals.forEach(item => {
    addCity(item.departure);
    addCity(item.arrival);
  });

  list.sort();

  return list;
};

export default createCitiesList