const handleSumRequest = require('./sum');

const handleRequest = ((req,res)=>{
console.log(req.url,req.method);
if(req.url==='/'){
  res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
    <head><title>calculator</title></head>
    <body>
    <h1>welcome to calculator</h1>
    <a href="/calculator">calculator</a>
    </body>
    </html>
    `)
  return res.end();
}
else if(req.url==='/calculator'){
  res.write(`
    <html>
    <head><title>calculator</title></head>
    <body>
    <form action="/calculate-result" method="POST">
    <input type="number" placeholder="enter number1" name="first"/>
    <input type="number" placeholder="enter number2" name="second"/>
    <button type="submit">sum</button>
    </form>
    </body>
    </html>
    `)
    return res.end();
}
else if(req.url==='/calculate-result' && req.method==='POST'){
  return handleSumRequest(req,res);
}
res.setHeader('Content-Type','text/html');
res.write(`
    <html>
    <head><title>calculator</title></head>
    <body>
    <h1>404-page not found</h1>
    <a href="/">go to home</a>
    </body>
    </html>
    `)
  return res.end();
});
module.exports = handleRequest;