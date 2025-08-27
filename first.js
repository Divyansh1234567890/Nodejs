console.log("lets start nodejs")

// Import the built-in 'fs' (file system) module
const fs = require('fs');
fs.writeFile('output.txt',"written file data",(err)=>{
  if(err) console.log("error occured");
  else console.log("file written successfully");
})