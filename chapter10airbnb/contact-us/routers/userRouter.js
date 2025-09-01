//core module
const path = require('path');

//local module
const rootDir = require('../utils/path');

const express = require('express');
const userRouter = express.Router();

userRouter.get('/',(req,res,next)=>{
  res.sendFile(path.join(rootDir,"views","home.html"));
})
module.exports = userRouter;