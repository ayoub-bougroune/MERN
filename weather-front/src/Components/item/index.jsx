import React from 'react';
import Grid from '@material-ui/core/Grid';
import Ville from '../ville';

export default function ItemVilles(props){
    return (
        <Grid container spacing={5} alignItems="center">
            {
                props.villes.map((ville) => (
                    <Grid item key={"grid_".concat(ville.name)} xs={12} sm={4} md={4}>
                        <Ville key = {ville.name} data={ville} home={props.home} />
                    </Grid>
                ))
            }
        </Grid>
    );
    
}