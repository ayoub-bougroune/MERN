import React from 'react';
import renderer from 'react-test-renderer';
import ItemVilles from './index';
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
test('The ItemVille renders correctly', () => {
  const itemVille = renderer
    .create(<ThemeProvider theme={theme}><ItemVilles villes={mockItems[0]}/></ThemeProvider>);
  const tree = itemVille.toJSON();
  expect(tree).toMatchSnapshot();
});