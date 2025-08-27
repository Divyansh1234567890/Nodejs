const http = require('http');
const handleRequest = require('./handler')
const server = http.createServer(handleRequest);
server.listen(3000,()=>{
  console.log("server is running at address : http://localhost:3000")
})