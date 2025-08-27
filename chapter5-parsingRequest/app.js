//creating an external module
const http = require('http');
const records = require('./user') //import the entire userRecords function from user.js
const server = http.createServer(records);
const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server is running at address : http://localhost:${PORT}`);
})