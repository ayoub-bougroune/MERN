import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemVille from '../item';
import Button from '@material-ui/core/Button';

let type_theme = 'dark'
const useStyles = makeStyles(theme => {
    type_theme = theme.palette.type === "dark"? "light": "dark";
    return {
arrowRightActif : {
    //width: 0,
   // height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    
    borderLeft: `20px solid ${theme.palette.primary.main}`,
  },
  arrowRightInActif : {
    //width: 0,
   // height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    
    borderLeft: `20px solid ${theme.palette.primary.dark}`,
  },

  arrowLeftActif : {
    //width: 0,
   // height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    
    borderRight: `20px solid ${theme.palette.primary.main}`,
  },
  arrowLeftInActif : {
    //width: 0,
   // height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    
    borderRight: `20px solid ${theme.palette.primary.dark}`,
  }

}});

const Arrow = function(props){
    const classes = useStyles();
    const {type, actif, handleClick} = props;
    return (<div className={classes["arrow"+type+actif]} onClick = {()=>handleClick(type)}></div>);
}

export default function Carousel(props){
    
    const {items, home} = props;
    //console.log(items[0])
    const [indexDisplayed, setIndexDisplayed] = React.useState(0);
    const handleClick = (action) =>{
        if(action === "Right" && (indexDisplayed + 1 < items.length))
            setIndexDisplayed(indexDisplayed + 1)
        else if(action === "Left" && indexDisplayed >=1)
            setIndexDisplayed(indexDisplayed - 1);
    }
    const renderAddButton = () =>
    {
      if(home)
        return (
          <Button href="/add" color="primary" variant="outlined" >
            Add City
          </Button>
        );
        else return null;
    }
    return (
        <Grid item container xs={12} spacing={3}>  
            <Grid item container bgcolor="primary.main"  direction="row" xs={1} alignItems="center" justify="center">
            { (indexDisplayed >=1 )?
             (<Arrow type= "Left" actif="Actif" handleClick={handleClick}/>)
             :(<Arrow type= "Left" actif="InActif" handleClick ={handleClick}/>)}
            </Grid>
            <Grid item xs={10}>
             <ItemVille  villes={items[indexDisplayed]} home={home} />
            </Grid>
            <Grid item container  direction="row" xs={1} alignItems="center" justify="center">
              { renderAddButton()}
            {  (items.length > indexDisplayed +1 )?  
              (<Arrow type= "Right" actif="Actif" handleClick={handleClick}/>)
             :(<Arrow type= "Right" actif="InActif" handleClick ={handleClick}/>)}
            </Grid>
        </Grid>
    );
}