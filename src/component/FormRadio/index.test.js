import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component options={[
    {label: '1'},
    {label: '2'},
  ]} />, div);
});
