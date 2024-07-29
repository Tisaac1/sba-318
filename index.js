const index = require('./User')
 
 //test
const express = require('express');
const hostname = express();
const port = 4000;


const reqFilter = (reqObject,resObject, next) => {
    console.log("reqFilter");
     next(); 
 const server = express((req, res) => {
    res.setHeader ('Content-Type', 'text/html');
    res.write('<h1 style="color: pink" >This is my webpage!</h1>');
    res.write('<p>testing..testing..1.2.3..</p>');
    res.end();
});
}

//Create and use error-handling middleware.
hostname.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

hostname.listen(port, hostname, () => {
    console.log('Server listening at ${port}.');
  });

const logReq = function (req, res, next) {
    console.log("Request Recieved");
    next();
  };

//Create and use at least two pieces of custom middleware.
  hostname.get("/home", (req, res) => {
    res.send("This is my server!");
  });

   hostname.use(logReq);
 console.log('Hello World')


// console.log('Hello World')