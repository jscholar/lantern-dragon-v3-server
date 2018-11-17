const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// API routes
const commentsRoutes = require('./routes/comments');

// Specify database URI
const uri = require('./credentials/uri.js');


mongoose.connect(uri)
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('Failed to connect to database');
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", commentsRoutes);

module.exports = app;
