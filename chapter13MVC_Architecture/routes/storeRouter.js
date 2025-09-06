// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

const hostController = require('../controllers/storeController');
storeRouter.get("/", hostController.getIndex);
storeRouter.get('/homeList',hostController.getHomes);
storeRouter.get('/bookings',hostController.getBookings);

storeRouter.get('/favourite',hostController.getFavourites);

module.exports = storeRouter;