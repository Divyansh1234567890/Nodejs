// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome',{pageTitle:"add home to airbnb"});
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);
  // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
  res.render('homeAdded',{pageTitle:"home registerd successfully"}); 
 
})

module.exports = {hostRouter,registeredHomes};
