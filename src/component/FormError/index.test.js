import React from 'react'
import renderer from 'react-test-renderer'
import FormError from './'

const errors = [
  'error 1',
  'error 2',
];

describe('form error', () => {
  test('empty should render without crashing', () => {
    const component = renderer.create(
      <FormError />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render without crashing', () => {
    const component = renderer.create(
      <FormError errors={errors} />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});