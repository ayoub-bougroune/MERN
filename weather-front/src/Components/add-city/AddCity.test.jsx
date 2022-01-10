import React from 'react';
import renderer from 'react-test-renderer';
import AddCity from './index';

test('The AddCity renders correctly', () => {
  const addCity = renderer
    .create(<AddCity />);
  const tree = addCity.toJSON();
  expect(tree).toMatchSnapshot();
});