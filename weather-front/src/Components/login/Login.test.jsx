import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './index';

test('The Home renders correctly', () => {
  const signIn = renderer
    .create(<SignIn />);
  const tree = signIn.toJSON();
  expect(tree).toMatchSnapshot();
});