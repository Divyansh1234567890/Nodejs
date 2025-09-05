// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();
const {registeredHomes} = require('./hostRouter');
// Local Module
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  console.log("registeres homes are :",registeredHomes);
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
  res.render('home',{registeredHomes:registeredHomes,pageTitle:"welcome to home page"});
});

module.exports = userRouter;