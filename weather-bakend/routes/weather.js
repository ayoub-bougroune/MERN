const express = require('express')
const auth = require('../middleware/auth')
const axios = require('axios')
const config = require('../config')
const { User, City} = require('../models')
const constructWeather = require('../utils')

const router = express.Router()

router.get("/home", auth, async function(request, response){
    var user  = await User.findById(request.user._id)
    .populate('favoriteCities'); 
    //get meteo favorites Cities
    var meteoCities = [];
    for(var i = 0; i < user.favoriteCities.length; i++){
        var city = user.favoriteCities[i];
        const { data } = await axios.get(
            config.urlApiWeatherWeek,
            {
            params : {
                "id" : city.id,
                "appid" : config.appid,
                "units": "metric",
                "cnt" : 8
            }
        });
        var meteoCity = constructWeather(data)[0];
        
        meteoCity['name'] = city.name;
        meteoCity['id'] = city.id;
        meteoCities.push(meteoCity)
    }
    
    response.json(meteoCities);
});

router.get("/detail/:id/", auth, async function(request, response){
    const city = await City.findOne({id : request.params.id})
    var meteoWeeks = {city : city.name, weeks : []}
    const { data } = await axios.get(
        config.urlApiWeatherWeek,
        {
        params : {
            "id" : request.params.id,
            "appid" : config.appid,
            "units": "metric"
        }
    });
    meteoWeeks.weeks = constructWeather(data);
    response.json(meteoWeeks);
});

module.exports = router