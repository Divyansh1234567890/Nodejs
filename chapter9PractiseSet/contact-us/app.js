const express = require('express');
const app = express();

app.use((req,res,next)=>{
  console.log("welcome to first middleware",req.url,req.method);
  next();
})

app.use((req,res,next)=>{
  console.log("welcome to second middleware",req.url,req.method);
  next();
})

// app.use('/',(req,res,next)=>{
// console.log("welcome to third middleware",req.url,req.method);
// res.send("welcome to express js")
// })

app.get('/',(req,res,next)=>{
console.log("handling / for GET",req.url,req.method);
res.send("<h1>practise set of express js</h1>")
})

app.get('/contact-us',(req,res,next)=>{
  console.log("handling /contact-us with GET",req.url,req.method);
  res.send(`
    <h1>enter your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text"  name ="name" placeholder="enter your name"/>
    <input type="email" name="email"placeholder="enter your email"/>
    <input type="submit" />
    </form>
    `)
})


app.post('/contact-us',(req,res,next)=>{
  console.log("handling /contact-us with POST",req.url,req.method);
  res.send(`
    <h1>our team will contact you soon</h1>
    `)
})

app.listen(3000,()=>{
console.log("server is running at address http://localhost:3000")
})