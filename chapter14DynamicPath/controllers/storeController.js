const Home = require('../models/home')
const Favourite = require('../models/favourite');
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
  Favourite.getFavourite(favourites=>{
    Home.fetchAll((homes)=>{
      const favouriteHomes = homes.filter(home=>favourites.includes(home.id));
    res.render('store/favourite', {favouriteHomes: favouriteHomes, pageTitle: 'My favourites'});
  });
  })
    
};

exports.postAddToFavourites = (req,res,next)=>{
  console.log("details of favourites are:",req.body);
  Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log("Error while making favourites:",error);
    }
   res.redirect('/favourite');
  })
  
}

exports.getHomeDetails = (req,res,next)=>{
  const homeId = req.params.homeId;
  console.log("home id is",homeId);
  Home.findById(homeId,home=>{
    if(!home){
      console.log("home not found");
      res.redirect("/homeList");
    }
    else{
    console.log("home details found:",home);
    res.render('store/homeDetails' ,{home:home,pageTitle:"home details"});
    }
  });
};

exports.deleteFavourite = (req,res,next)=>{
  const homeId = req.params.homeId;
  Favourite.deleteFavourite(homeId,(error)=>{
    if(error){
      console.log("Error in Deleting Favourites:",error);
    }
      res.redirect('/favourite');
  });
}