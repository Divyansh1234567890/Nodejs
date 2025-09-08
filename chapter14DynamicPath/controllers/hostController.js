const Home = require('../models/home')

exports.getAddHome=(req, res, next) => {
  res.render('host/editHome', {editing:false,pageTitle: 'Add Home to airbnb',currentPage:"addHome"});
}

exports.getEditHome = (req,res,next) =>{
  const homeId = req.params.homeId;
  const editing = req.query.editing==='true'; // we do compare with 'true' because initially when editing will come, it come in string format and then comparing with ==='true' will make editing as a boolean;
  
  Home.findById(homeId,home=>{
    if(!home){
      console.log("Home is notFound for Editing");
      return res.redirect('/homeList');
    }
    console.log(homeId,editing,home);
    res.render('host/editHome',{home:home,pageTitle:'Edit your Home',editing:editing});
  })  
}




exports.getHostHomes=(req, res, next) => {
  Home.fetchAll((homes)=>{
    res.render('host/hostHomeList', {registeredHomes: homes, pageTitle: 'Host Home List'});
  });
};

exports.postAddHome=(req, res, next) => {
  const {houseName,pricePerNight,Location,Rating,photoUrl} = req.body;
  const homeObj = new Home(houseName,pricePerNight,Location,Rating,photoUrl);
  homeObj.save();
  res.redirect('/host/hostHomeList');
}


exports.postEditHome=(req, res, next) => {
  const {id,houseName,pricePerNight,Location,Rating,photoUrl} = req.body;
  const homeObj = new Home(houseName,pricePerNight,Location,Rating,photoUrl);
  homeObj.id = id;
  homeObj.save();
  res.redirect('/host/hostHomeList');
}

exports.postDeleteHome=(req, res, next) => {
 const homeId = req.params.homeId;
 Home.deleteById(homeId,error=>{
  if(error){
    console.log("Error while deleting",error)
  }
 })
  res.redirect('/host/hostHomeList');
}
