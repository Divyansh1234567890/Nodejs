const express = require('express');
const app = express();
const path = require('path');
const rootDir = require('./utils/path');
const homeRouter = require('./routers/homeRouter');
const contactUsRouter = require('./routers/contactUsRouter');

app.use((req,res,next)=>{
  console.log("welcome to first middleware",req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log("welcome to second middleware",req.url,req.method);
  next();
})

// app.use('/',(req,res,next)=>{
// console.log("welcome to third middleware",req.url,req.method);
// res.send("welcome to express js")
// })
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactUsRouter);
app.use((req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','404NotFound.html'));
})


app.listen(3000,()=>{
console.log("server is running at address http://localhost:3000")
})