require('dotenv').config();
const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const PORT = process.env.PORT || 3001;
// Sets up the Express App
// =============================================================
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Database configuration with mongoose
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

require("./routes")(app);

app.listen(PORT, () => {
  console.log('Example app listening on port 3001!');
});

