import React from 'react';
import renderer from 'react-test-renderer';
import Register from './index';

test('The Carousel renders correctly', () => {
  const register = renderer
    .create(<Register />);
  const tree = register.toJSON();
  expect(tree).toMatchSnapshot();
});