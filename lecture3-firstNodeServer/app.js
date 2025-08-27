const http = require('http');

const server = http.createServer((req,res)=>{ //createServer returns an object
  console.log(req);
  process.exit(); //stops the event loop
})

const PORT = 3000;

server.listen(PORT,()=>{
  console.log(`server is running at address : http://localhost:${PORT}`);
})