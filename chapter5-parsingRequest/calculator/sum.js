const handleSumRequest = (req,res)=>{
console.log("in sumRequestHandler",req.url);
const body = [];
req.on('data',(chunk)=>{
  console.log(chunk);
body.push(chunk);
})
req.on('end',()=>{
  const fullBody = Buffer.concat(body).toString();
  console.log(fullBody)
  const params = new URLSearchParams(fullBody);
  console.log(params)
  const bodyObj = Object.fromEntries(params);
  console.log(bodyObj)
  const result = Number(bodyObj.first)+Number(bodyObj.second);
  console.log(result)
res.setHeader("Content-Type","text/html");
res.write(`
    <html>
    <head><title>calculator</title></head>
    <body>
    <h1>your sum is:${result}</h1>
    </body>
    </html>
    `)
  return res.end();
})
}
module.exports = handleSumRequest;