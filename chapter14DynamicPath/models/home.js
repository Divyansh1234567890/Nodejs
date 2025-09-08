const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');
const Favourite = require('./favourite');

 const homeDataPath = path.join(rootDir,'data','homes.json');

module.exports = class Home {
  constructor(houseName,pricePerNight,Location,Rating,photoUrl){
    this.houseName = houseName;
    this.pricePerNight = pricePerNight;
    this.Location = Location;
    this.Rating = Rating;
    this.photoUrl = photoUrl;
  }
  save(){
   Home.fetchAll((registeredHomes)=>{
    if(this.id){
      registeredHomes = registeredHomes.map(home=>home.id===this.id?this:home);
    }
    else{
    this.id = Math.random().toString();
    registeredHomes.push(this);
    }
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error=>{console.log("data is concluded",error)});
    });
  }
  static fetchAll(callback){
    fs.readFile(homeDataPath,(err,data)=>{
      let homes = [];
      if(!err){
        homes = JSON.parse(data);
      }
     callback(homes);
    })
  }

  static findById(homeId,callback){
    this.fetchAll(homes=>{
      const myHome = homes.find(home=>home.id===homeId);
      callback(myHome);
    })
  }

  static deleteById(homeId,callback){
    this.fetchAll(homes=>{
      homes = homes.filter(homes=>homes.id!==homeId);
      fs.writeFile(homeDataPath,JSON.stringify(homes),callback);
      Favourite.deleteFavourite(homeId,callback);//once the home has been deleted from host home then also delete the home from favourite
    });
  };
};