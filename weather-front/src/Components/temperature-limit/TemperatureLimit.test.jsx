import React from 'react';
import renderer from 'react-test-renderer';
import TemperatureLimit from './index';

test('The Carousel renders correctly', () => {
  const limit = renderer
    .create(<TemperatureLimit />);
  const tree = limit.toJSON();
  expect(tree).toMatchSnapshot();
});