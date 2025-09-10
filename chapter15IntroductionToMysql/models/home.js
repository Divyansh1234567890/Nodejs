const db = require('../utils/databaseUtils');

module.exports = class Home {
  constructor(housename, price, location, rating, photourl, id, description) {
  this.housename = housename;
  this.price = price;
  this.location = location;
  this.rating = rating;
  this.photourl = photourl;
  this.id = id;
  this.description = description;
  }
save() {
  return db.execute(
    'INSERT INTO homes (housename, price, location, rating, photourl, id,description) VALUES (?,?,?,?,?,?,?)',
    [
      this.housename,
    this.price,
    this.location,
    this.rating,
    this.photourl,
    this.id,
    this.description
    ]
  );
}


  static fetchAll(){
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId){
    return db.execute('SELECT * FROM homes WHERE id = ?',[homeId]);
  }

  static deleteById(homeId,callback){
   
  };
};