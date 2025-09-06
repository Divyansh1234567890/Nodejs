const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');

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
    registeredHomes.push(this);
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error=>{console.log("data is concluded",error)});
    });
  }
  static fetchAll(callback){
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.readFile(homeDataPath,(err,data)=>{
      let homes = [];
      if(!err){
        homes = JSON.parse(data);
      }
     callback(homes);
    })
  }
}