import getTotalUnits from './get-total-units'
import trips from 'deals'

const tripsToCheck = [
  trips[0],
  trips[1],
  trips[2],
];

describe('get total units helper', () => {
  test('get proper total values', () => {
    const result = getTotalUnits(tripsToCheck);
    expect(result).toMatchSnapshot();
  });
});