import React from 'react';
import API from '../../utils/API';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddCity(props){
    const [country, setCountry] = React.useState('');
    const [countries, setListCountries] = React.useState([]);
    const [city, setCity] = React.useState('');
    const [listCities, setListCities] = React.useState([]);
    const myAPI = new API();
    const componentDidMount = () => {
        myAPI.getCountries().then((response => setListCountries(response)
            ));        
    }
    React.useEffect(componentDidMount, []);
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
        myAPI.getCities(event.target.value).then((response) => setListCities(response));
    }
    const handleChangeCity = (event) => setCity(event.target.value);
    const handleSubmit = ()=>{
        myAPI.addCity(city).then((response) => alert(response));
    }
    return (
        <Grid item container xs={12} spacing={3}>
          <Grid item sm={2}>
            <TextField
              id="country"
              select
              value={country}
              onChange={handleChangeCountry}
              helperText="Please select country"
            >
              {countries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid> 
          <Grid item sm={2}>
            <TextField
              id="city"
              select
              value={city}
              onChange={handleChangeCity}
              helperText="Please select city"
            >
              {listCities.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={2}>
            <Button  color="primary" variant="outlined" onClick={handleSubmit}>
              Add City
            </Button>
          </Grid>
          <Grid item sm={2}>
            <Button href="/home" color="primary" variant="outlined" >
              Back to Home
            </Button>
          </Grid>
        </Grid>
    )
}