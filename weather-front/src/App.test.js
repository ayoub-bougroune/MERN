import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const app = renderer
    .create(<App />);
  const tree = app.toJSON();
  expect(tree).toMatchSnapshot();
});
