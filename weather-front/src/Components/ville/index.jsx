import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import TemperatureLimit from '../temperature-limit'
import API from '../../utils/API';

let type_theme = 'dark'
const useStyles = makeStyles(theme => {
    type_theme = theme.palette.type ;
    return {
    card: {
       // backgroundColor: theme.palette.secondary.dark,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        background: `linear-gradient( ${theme.palette.info.light} , ${theme.palette.info.main} )`,
        maxHeight: 425,
        //backgroundImage: 'url(/assets/snowing_dark.png)'
    },
    title: {
      fontSize: 20,
    },
    cardTitle: {
        paddingTop : 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: theme.spacing(2),
      },
      cardDegree:{
        //paddingTop: 120,
        alignItems: 'center',
      },
    media: {
      display: 'flex',
      margin: "-70px auto 0",
      width: "80%",
      height: 350,
      justifyContent: 'center',
      alignItems: 'flex-end',
      //boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
      position: "relative",
      zIndex: 1000
    }
  }});
  
export default function Ville(props){
    const {data, home} = props
    const classes = useStyles();
    const myAPI = new API();

    const handleClickCity = (id) =>{
      window.location = "/detail/"+id;

    }
    const handleDelete = () =>{
      myAPI.deleteCity(data.id).then((response) => {
        alert(response)
        window.location = "/home"
      })
    }
    const renderDelete = () =>{
      if(home)
        return (
          <DeleteIcon onClick={handleDelete}/>
        );
        else return null;
    }
    const renderDetail = () =>{
      if(home)
       return (<AddCircleOutlineIcon onClick={()=> handleClickCity(data.id)}/>);
       else return null;
    }
    return (
        <Card className={classes.card} >
        {renderDelete()}{ renderDetail()}
        <CardContent  className={classes.cardTitle} >
        <Typography className={classes.title} >
          {data.name} 
        </Typography>
        
        </CardContent>
        <CardMedia
            className={classes.media}
            image={`/assets/${data.weather}_${type_theme}.png`}
            title="Paella dish"
            //component="img"  
        >
          <CardContent className={classes.cardDegree}><h1>{data.temperature}{'\u00b0'}</h1></CardContent>
            
          
        </CardMedia>
        
        
        <CardActions >
          <Grid container >
            <Grid item xs={2}><TemperatureLimit value={data.min} type= "Min"/></Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}><TemperatureLimit value={data.max} type= "Max"/></Grid>
   
          </Grid>
        </CardActions>
      
    </Card>
    )
}