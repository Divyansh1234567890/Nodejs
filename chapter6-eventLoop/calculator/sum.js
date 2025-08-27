const handleSumRequest = (req,res)=>{
console.log("1.in sumRequestHandler",req.url);
const body = [];
let result;
req.on('data',(chunk)=>{
  // console.log(chunk);
  console.log("2.chunk comes")
body.push(chunk);
})
req.on('end',()=>{
  const fullBody = Buffer.concat(body).toString();
  // console.log(fullBody)
  const params = new URLSearchParams(fullBody);
  // console.log(params)
  const bodyObj = Object.fromEntries(params);
  // console.log(bodyObj)
  result = Number(bodyObj.first)+Number(bodyObj.second);
  console.log("3.result has been generated");
  // console.log(result)
})

res.setHeader("Content-Type","text/html");
console.log("4.it should execute before the 2 and 3 request");
res.write(`
    <html>
    <head><title>calculator</title></head>
    <body>
    <h1>your sum is:${result}</h1>
    </body>
    </html>
    `)
  return res.end();

}
module.exports = handleSumRequest;

// output->
// 1.in sumRequestHandler /calculate-result
// 4.it should execute before the 2 and 3 request
// 2.chunk comes
// 3.result has been generated