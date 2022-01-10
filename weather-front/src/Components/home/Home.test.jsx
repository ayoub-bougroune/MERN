import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

test('The Home renders correctly', () => {
  const home = renderer
    .create(<Home />);
  const tree = home.toJSON();
  expect(tree).toMatchSnapshot();
});