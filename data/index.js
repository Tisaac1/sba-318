const express = require('express');
const path= require('path');
const pug = require('pug');

//  const serveStatic = require('serve-static');
//test
const Students = require('./User.js');
const grades =require('./data/grades.js');

const app = express ();
const port= 4000;

///// Create and use at least two pieces of custom middleware.



const html = pug.renderFile('./views/index.pug'); // Render the template
console.log(pug); 

 app.use(express.static(path.join(__dirname, '/public')));


app.get("/", (req,res) => {
    //  res.render('index',{title: "Hello", message: "This is my site!"}); //THIS test out my error message
    res.send("Ello Friend! Welcome to my site");
})


//Create and use error-handling middleware.

app.use((err, req, res, next) => {
  console.error('UH-UH 300:', err.message);
  res.status(500).send('Error with pug!');
});



 app.listen(port, () => console.log('server listening on port: ${port}!'))


// app.listen(port, app, () => {
//     console.log('Server listening at ${port}!');
//   });

const logReq = function (req, res, next) {
    console.log("Request, Recieved");
    next();
  };

// Create and use at least two pieces of custom middleware.
  
  

   app.use(logReq);
 console.log('Hello World')


// console.log('Hello World')
//Template engine for pug
// const path = require('path');
app.set('view engine', 'pug');
app.set('views', 'views');


