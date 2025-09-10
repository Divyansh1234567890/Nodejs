// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

const storeController = require('../controllers/storeController');
storeRouter.get("/", storeController.getIndex);
storeRouter.get('/homeList',storeController.getHomes);
storeRouter.get('/bookings',storeController.getBookings);
storeRouter.get('/favourite',storeController.getFavourites);
storeRouter.post('/favouritesPage',storeController.postAddToFavourites);
storeRouter.get('/homeList/:homeId',storeController.getHomeDetails);
storeRouter.post('/favourite/delete/:homeId',storeController.deleteFavourite);
module.exports = storeRouter;