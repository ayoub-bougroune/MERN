const mongoose = require('mongoose')
const config = require("../config");

mongoose.connect(config.mongoDbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
});