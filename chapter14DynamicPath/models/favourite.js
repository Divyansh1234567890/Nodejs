const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

 const favouriteDataPath = path.join(rootDir,'data','favourites.json');

module.exports = class Favourite {

  static addToFavourite(homeId,callback){
    Favourite.getFavourite((favourites)=>{
      if(favourites.includes(homeId)){
        callback("Home is already added in the favourites list");
      }
      else{
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
      }
    });
  }


  static getFavourite(callback){
    fs.readFile(favouriteDataPath,(error,data)=>{
      callback(!error?JSON.parse(data):[]);
    })
  }

  static deleteFavourite(homeId,callback){
    Favourite.getFavourite((favourites)=>{
      const updatedFavourites = favourites.filter(id=>id!==homeId);
      fs.writeFile(favouriteDataPath,JSON.stringify(updatedFavourites),callback);
    })
  }
  
}