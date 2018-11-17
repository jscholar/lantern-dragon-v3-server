const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// API routes
const commentsRoutes = require('./routes/comments');
const textRoutes = require('./routes/text');
const chapterRoutes = require('./routes/chapters');

// Specify database URI
const uri = require('./credentials/URI');


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

app.use("/api/posts/comments", commentsRoutes);
app.use("/api/posts/text", textRoutes);
app.use("api/chapters/", chapterRoutes);

module.exports = app;
