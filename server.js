const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();
//DB config
const db = require('./config/keys').mongoURI
//PORT
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server running')
})

//Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

//Connect to mongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Mongo connected')
    })
    .catch(err => console.log(err))