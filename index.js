 //test
const express = require('express');
const hostname = express();
const port = 3000;



 const server = express((req, res) => {
    res.statusCode =200;
    res.setHeader ('Content-Type', 'text/html');
    res.write('<h1 style="color: pink" >This is my webpage!</h1>');
    res.write('<p>testing..testing..1.2.3..</p>');
    res.end();
});

hostname.listen(port, hostname, () => {
    console.log('Server listening at ${port}.');
  });

const logReq = function (req, res, next) {
    console.log("Request Recieved");
    next();
  };


  hostname.get("/", (req, res) => {
    res.send("testing testing 1 2 3");
  });

   hostname.use(logReq);
 console.log('Hello World')



// console.log('Hello World')

