const express = require('express');
const path = require('path');
const contactUsRouter = express.Router();
const rootDir = require('../utils/path');
contactUsRouter.get('/contact-us',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','contact-us-get.html'))
})
contactUsRouter.post('/contact-us',(req,res,next)=>{
  console.log(req.body)
  res.sendFile(path.join(rootDir,'views','contact-us-post.html'));
})
module.exports = contactUsRouter;