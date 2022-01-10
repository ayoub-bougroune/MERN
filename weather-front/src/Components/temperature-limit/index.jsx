import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
arrowUp : {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",    
    borderBottom: `5px solid #f00`,
  },  
arrowDown : {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",    
    borderTop: `5px solid ${theme.palette.primary.main}`,
  }
}));

export default function TemperatureLimit(props){
    const classes = useStyles();
    const color = props.type === 'Min'? "primary.main":"#f00";
    const arrow = props.type === 'Min'? classes.arrowDown: classes.arrowUp;
    return (
        <Grid item container direction="column">
            <Grid><div className={arrow}></div></Grid>
            <Grid>{props.value}</Grid>
            <Grid color={color}><Box color={color}>{props.type}</Box></Grid>
        </Grid>
    )
}