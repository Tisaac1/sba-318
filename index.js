const express = require('express');
const path= require('path');
const pug = require('pug');
const port = 4000;
const app = express();

// routes
const UserRoute = require('./route/User');
const AttendanceRoute = require('./route/Attendance');


 const serveStatic = require('serve-static');
 app.use(express.static(path.join(__dirname, 'styles')));

// test

UserRoute.get('/User', (req, res) => {
  res.send('User');
});


//Template engine for pug
// const path = require('path');
app.set('view engine', 'pug');
app.set('views', 'views');


// app.use('/User', UserRoute);

// app.get('/User', (req, res) => {
//   res.send('Come to class')
// })

// app.use('/Attendance', AttendanceRoute);

// app.get('/Attendance', (req, res) => {
//   res.redirect('https://www.myattendancetracker.com/')
// })


//MIDDLEWARE//

const html = pug.renderFile('./views/index.pug'); 
console.log(pug); 

app.use(express.static("./styles"));


// app.get("/", (req,res) => {
//     //  res.render('index',{title: "Hello", message: "This is my site!"}); //THIS test out my error message
//     res.send("Welcome to attendance tracker");
// })


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const userMiddleware = (req, res, next) => {
    if (req.user) {
        req.user = { id: req.user.id, username: req.user.username };
    } else {
        req.user = { id: 1, username: 'defaultUsername' };
    }
    next();
};


app.use(userMiddleware);

// render view w/ form
app.get('/', (req, res) => {
  res.render('');
});

const logReq = function (req, res, next) {
  console.log("Request, Recieved");
  next();
};
//Create and use error-handling middleware.

app.use((err, req, res, next) => {
  console.error('UH-UH 300:', err.message);
  res.status(500).send('Error with pug!');
});


 app.listen(port, () => console.log('server listening on port: ${port}!'))






  

//    app.use(logReq);
//  console.log('Hello World')


// console.log('Hello World')


  

//    app.use(logReq);
//  console.log('Hello World')


// console.log('Hello World')

