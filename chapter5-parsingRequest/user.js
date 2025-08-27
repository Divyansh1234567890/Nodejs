
const fs = require('fs');

const userRecords = ((req,res)=>{ 
  console.log(req.url,req.method);
  if(req.url=='/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>first request response</title></head>');
  res.write('<body><h1>welcome to home page<h1/>');
  res.write('<form action="/submit-details" method="POST">');
  res.write('<input type="text" name="username" placeholder="enter username" />');
  res.write('<h2>select gender</h2>')
  res.write('<label for="male">Male</label>');
  res.write('<input type="radio" id="male" value="male" name="gender"/>');
  res.write('<label for="female">Female</label>');
  res.write('<input type="radio" id="female" value=female name="gender"/>');
  res.write('<button type="submit" >submit</button>');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
  }
  else if(req.url.toLowerCase()==="/submit-details" && req.method==="POST"){
    const body = [];
    req.on('data',(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      // const bodyObj = {};
      // for (const [key,val] of params.entries()) {
      //   bodyObj[key] = val;
      // } 

      //OR
      const bodyObj = Object.fromEntries(params)
      console.log(bodyObj);
      fs.writeFileSync('output.txt',JSON.stringify(bodyObj));
    });

    
    res.setHeader('Location','/');
    res.statusCode = 302;
  }
  
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>first request response</title></head>');
  res.write('<body><h1>hey divyansh, first response generate successfully<h1/></body>');
  res.write('</html>');
  res.end(); //res.end() means now i have no response to send
})

module.exports = userRecords