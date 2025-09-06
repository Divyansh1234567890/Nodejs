const Home = require('../models/home')

exports.getIndex=(req, res, next) => {
  Home.fetchAll((homes)=>{
    res.render('store/index', {registeredHomes: homes, pageTitle: 'airbnb index'});
  });
};

exports.getHomes=(req, res, next) => {
  Home.fetchAll((homes)=>{
    res.render('store/homeList', {registeredHomes: homes, pageTitle: 'airbnb Home list'});
  });
};

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: 'my bookings'});  
};

exports.getFavourites = (req, res, next) => {
    Home.fetchAll((homes)=>{
    res.render('store/favourite', {registeredHomes: homes, pageTitle: 'airbnb Home list'});
  });
};