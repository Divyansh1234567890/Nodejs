//core module
const path = require('path');

//external module
const express = require('express');
const app = express();

//local module
const userRouter = require('./routers/userRouter');
const hostRouter = require('./routers/hostRouter');
const rootDir = require('./utils/path');

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views","pageNotFound.html"));
})

app.listen(3000,()=>{
  console.log("server is running at address : http://localhost:3000");
})