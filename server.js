const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const user = require('./routes/user');



app.use('/user', user);

mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb Connected'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
