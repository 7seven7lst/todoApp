const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const PORT = process.env.PORT || 3001;
// Sets up the Express App
// =============================================================
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Static directory
app.use(express.static("./dist"));
require("./controllers/todo_controller.js")(app);

  app.listen(PORT, () => {
    console.log('Example app listening on port 3001!');
  });

