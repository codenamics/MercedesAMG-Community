const express = require('express')
const mongoose = require('mongoose')

const app = express();
//DB config
const db = require('./config/keys').mongoURI
//PORT
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server running')
})

//Connect to mongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Mongo connected')
    })
    .catch(err => console.log(err))