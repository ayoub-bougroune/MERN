import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch as SwitchRouter} from "react-router-dom";

import Home from './Components/home'
import Detail from './Components/detail'
import AddCity from './Components/add-city';
import { getThemeProps } from '@material-ui/styles';
import API from './utils/API';

const drawerWidth = 240;
const useStyles = makeStyles(theme => {
  return (
  {
    root: {
        display: 'flex',
      },
      toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        backgroundColor: theme.palette.secondary.dark,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
      headerLogo: {
        padding: '0 15px',
        backgroundColor: '#dedede',
        transform: 'translateX(24px)',
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        //backgroundColor: theme.palette.secondary.main
         background: `linear-gradient( ${theme.palette.secondary.light} , ${theme.palette.secondary.main} )`,
       // background: `linear-gradient(${theme.palette.secondary.ligth},${theme.palette.secondary.main})`,
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
    });
  });
    



export default function App(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(props.check);
  const myAPI = new API();

  const handleChangeChecked = () =>{
    setChecked(!checked);
    props.handleChangeTheme(!checked? 'dark':'light');
  }
  const logOut = () => {
    myAPI.logout();
    window.location = "/login";
  }
 return (
    <React.Fragment>
      <div  className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>        
         
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Minimis
          </Typography>
          LIGHT 
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChangeChecked} />}
            label="DARK"
          />
         <Button href="#" color="primary" variant="outlined" onClick={logOut}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      
      <main className={classes.content}>
      
        <div className={classes.appBarSpacer} />

          <Container maxWidth="lg" className={classes.container}>
            <Grid  container spacing={3}>
              <Grid item xs={12}>   
              <BrowserRouter>
                <SwitchRouter>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/detail/:id" component={Detail} />
                  <Route exact path="/add" component={AddCity} />
                </SwitchRouter> 
              </BrowserRouter>       
              </Grid>
            </Grid>  
          </Container>
        
      </main>
      
      </div>  
  
    </React.Fragment>
  );
}