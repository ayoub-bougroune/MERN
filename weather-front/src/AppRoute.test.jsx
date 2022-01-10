import React from 'react';
import renderer from 'react-test-renderer';
import AppRoute from './AppRoute';

test('The App Route renders correctly', () => {
  const appRoute = renderer
    .create(<AppRoute />);
  const tree = appRoute.toJSON();
  expect(tree).toMatchSnapshot();
});