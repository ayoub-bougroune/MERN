import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './Components/private-route';
import Register from './Components/register';

import App from './App';
import SignIn from './Components/login';


const dark_theme = createMuiTheme({
  palette: {
    primary: { main: "#00FF9B", contrastText: "#fff" },
    secondary: { light : "#8c75e0", main: "#432C85", contrastText: "#fff" },
    info:{light : "#01057a", main: "#701b86", contrastText: "#fff"},
    type: 'dark'
  }
});
const light_theme = createMuiTheme({
  palette: {
    primary: {main: "#00FF9B", contrastText: "#000" },
    secondary: {  main: "#FFFFFF", dark: "#FFFFFF" , contrastText: "#000"},
    info: {  main: "#FFFFFF", dark: "#FFFFFF" },
    type: 'light'
  }
});
// , contrastText: "#0f0"

function AppRoute() {
  const [theme, setTheme] = React.useState(dark_theme);
  
  const handleChangeTheme = (value) =>{
    if(value === 'dark'){
       setTheme(dark_theme);
    }else{
      setTheme(light_theme);
    }
  }
  return (
    
    <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Switch>
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute path="/"  component={(props) => <App  handleChangeTheme={handleChangeTheme} check={theme.palette.type == 'dark'}/>} />
      </Switch>
    
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default AppRoute;
