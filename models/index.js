// const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();
// const dbUrl = 'mongodb://heroku_4vdrf3kr:53tmvnobn8r992jn40gd8k54mv@ds151450.mlab.com:51450/heroku_4vdrf3kr' || 'mongodb://localhost:27017/event-app';
const dbUrl = 'mongodb://localhost:27017/event-app';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected..'))
.catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
    Event: require('./Event'),
    User: require('./User'),
  };