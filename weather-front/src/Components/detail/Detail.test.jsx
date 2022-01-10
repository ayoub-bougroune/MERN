import React from 'react';
import renderer from 'react-test-renderer';
import Detail from './index';
import {Route, MemoryRouter } from "react-router-dom";

test('The Detail renders correctly', () => {
  const detail = renderer.create(
      <MemoryRouter initialEntries={["detail/2553604"]}>
        <Route path='detail/:id'>
          <Detail />
        </Route>
      </MemoryRouter>
    );
  
  
  const tree = detail.toJSON();
  expect(tree).toMatchSnapshot();
});