const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true,})

mongoose.connect(process.env.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('whoops');
});







