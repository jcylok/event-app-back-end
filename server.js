const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello David!'))

mongoose.connect('mongodb://localhost/event-app', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = require(`./models`);


const server = app.listen(9000);
