const express = require('express')
const auth = require('../middleware/auth')
const { City } = require('../models')

var router = express.Router();
//List countries
//List cities by code country
router.get('/countries',auth,async function(request, response){
    data = [
        {value : "MA", label : "MAROC"},
        {value : "FR", label : "FRANCE"}
]
    response.json(data);
})
router.get('/cities/:code', auth, async function(request,response){
    const cities = await City.find({country : request.params.code});
    response.json(cities);
})
//Add Favorite City route 
router.post('/cities/add', auth, async function(request, response){
    try{
    var city = await City.findOne({id : request.body.id});
    request.user.favoriteCities.push(city);
    await request.user.save();
    response.json("Added with success");
    }catch{
        response.json("Error add favorite city");
    }
})
//Delete favorite city
router.get('/cities/delete/:id', auth, async function(request, response){

    try{
        const city = await City.findOne({id : request.params.id});
        request.user.favoriteCities.splice(request.user.favoriteCities.indexOf(city._id), 1);
        await request.user.save();
        response.json("Removed with success");
    }catch{
        response.json("Error remove favorite city");
    }
})
module.exports = router