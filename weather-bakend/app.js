const express = require('express')
const port = 8800
const userRouter = require('./routes/user')
const weatherRouter = require('./routes/weather')
const cityRouter = require('./routes/city')
require('./db/db')

const app = express()
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.use(userRouter)
app.use(weatherRouter)
app.use(cityRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})