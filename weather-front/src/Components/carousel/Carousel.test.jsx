import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from './index';
import mockItems from '../../utils/mockData';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00FF9B", contrastText: "#fff" },
    secondary: { light : "#8c75e0", main: "#432C85", contrastText: "#fff" },
    info:{light : "#01057a", main: "#701b86", contrastText: "#fff"},
    type: 'dark'
  }
});

test('The Carousel renders correctly', () => {
  const carousel = renderer
    .create( <ThemeProvider theme={theme}><Carousel items = {mockItems} home="true" /></ThemeProvider>);
  const tree = carousel.toJSON();
  expect(tree).toMatchSnapshot();
});