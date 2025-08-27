const http = require('http');

const server = http.createServer((req,res)=>{ //createServer returns an object
  console.log(req);
})

const PORT = 3001;

server.listen(PORT,()=>{
  console.log(`server is running at address : http://localhost:${PORT}`);
})