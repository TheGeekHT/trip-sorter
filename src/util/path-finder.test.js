import PathFinder from './path-finder'
import trips from 'deals'

describe('path finder class', () => {
  test('get fastest direct trip', () => {
    const result = new PathFinder(trips, 'Istanbul', 'Athens', 'fastest').find();
    expect(result).toMatchSnapshot();
  });

  test('get cheapest direct trip', () => {
    const result = new PathFinder(trips, 'Istanbul', 'Athens', 'cheapest').find();
    expect(result).toMatchSnapshot();
  });

  test('get fastest trip', () => {
    const result = new PathFinder(trips, 'Kiev', 'Paris', 'fastest').find();
    expect(result).toMatchSnapshot();
  });

  test('get cheapest trip', () => {
    const result = new PathFinder(trips, 'Kiev', 'Paris', 'cheapest').find();
    expect(result).toMatchSnapshot();
  });

  test('check wrong departure/arrival city', () => {
    const result = new PathFinder(trips, 'K', 'Paris', 'cheapest').find();
    expect(result).toMatchSnapshot();
  });

  test('check if there is no trips data', () => {
    expect(() => {
      new PathFinder(undefined, 'Kiev', 'Paris', 'cheapest').find()
    }).toThrowErrorMatchingSnapshot();
  });

  test('unsupported trip type', () => {
    expect(() => {
      new PathFinder(trips, 'Istanbul', 'Athens', 'dadsasd').find();
    }).toThrowErrorMatchingSnapshot();
  });
});