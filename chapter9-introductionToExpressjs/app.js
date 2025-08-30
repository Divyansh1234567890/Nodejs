//there is no need of http because express can handle the task of http

//local module
const records = require('./user') //import the entire userRecords function from user.js

//external module
const express = require('express');
const app = express();

//we can create middleware in express by using .use(); .use() takes 3 arguments -> request,response,next. next is used to send response to next middleware that the current middleware completed its response. .use() can also take a path 

app.get('/',(req,res,next)=>{
  console.log("inside first middleware",req.url,req.method);
  next();
});

app.post('/submit-details',(req,res,next)=>{
  console.log("inside second middleware");
  res.send("<p>welcome to the introduction of express js</p>")
});

app.use('/',(req,res,next)=>{
  console.log("inside the another middleware",req.url,req.method);
  res.send("<p>inside the another middleware</p>");
})

// const server = http.createServer(app); no need to create server , because express can create it and directly listen it
const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`server is running at address : http://localhost:${PORT}`);
})