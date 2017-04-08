import React from 'react'
import renderer from 'react-test-renderer'
import TripsResult from './'

test('trips result should render without crashing', () => {
  const component = renderer.create(
    <TripsResult>
      Some test goes here
    </TripsResult>
  ).toJSON();
  expect(component).toMatchSnapshot();
});
