const express = require('express');
const app = express();
 const port = 4000;
const path = require('path');
const route = express.Router();
// const serveStatic = require('serve-static');


app.get("/User", (req, res) => {
    res.send("This is my server!");
})

app.use('/public', express.static('public'));

const Students = [
    {
      id: 1,
      name: "Carla",
      username: "cbear2",
      email: "clina@perscholas.com",
    },
    {
      id: 2,
      name: "Sara-lee",
      username: "Sciota238",
      email: "s.loa@perscholas",
    },
    {
      id: 3,
      name: "Tina",
      username: "Tinasnow",
      email: "TexasT@perscholas.com",
    },
  ];
  
 
// route.use((req, res, next) => {
//     console.log('Students')
    
// })

app.use((req, res, next) => {
  console.log('Students');
  next();
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
})

    
module.exports = Students;
