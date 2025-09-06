const Home = require('../models/home')

exports.getAddHome=(req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb',currentPage:"addHome"});
}

exports.getHostHomes=(req, res, next) => {
  Home.fetchAll((homes)=>{
    res.render('host/hostHomeList', {registeredHomes: homes, pageTitle: 'Host Home List'});
  });
};

exports.postAddHome=(req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  const {houseName,pricePerNight,Location,Rating,photoUrl} = req.body;
  const homeObj = new Home(houseName,pricePerNight,Location,Rating,photoUrl);
  homeObj.save();
  res.render('host/homeAdded', {pageTitle: 'Home Added Successfully'});
}

