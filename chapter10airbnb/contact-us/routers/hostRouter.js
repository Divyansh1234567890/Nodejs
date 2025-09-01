const express = require('express');
const hostRouter = express.Router();

//core module
const path = require('path');

//localmodule
const rootDir = require('../utils/path');

hostRouter.get('/add-home',(req,res,next)=>{
  res.sendFile(path.join(rootDir,"views","addHome.html"));
})


hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body);
res.sendFile(path.join(rootDir,"views","homeAdd.html"));
})

module.exports = hostRouter;