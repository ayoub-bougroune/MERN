const dataCities = require('./data/cities')
const dataCountries = require('./data/countries')
const { City } = require('../models')
require('./db')

/* Insert cities */
dataCities.forEach(async(city) => {
    console.log({id : city.id, name : city.name, country : city.country})
    var cityToSave = new City({id : city.id, name : city.name, country : city.country})
    await cityToSave.save();
});
/** end insert cities */

/** insert countries */
/** end insert countries */