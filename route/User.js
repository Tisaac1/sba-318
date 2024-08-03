
const express = require('express');
const app = express();
const port = 4000;
const router = express.Router();


// const serveStatic = require('serve-static');


// GET 
router.get('/', (req,res) => res.json(User));

 app.use('/public', express.static('public'));

 app.get('User', (req, res) => {
  res.send('Welcome to the student center')
})

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
  

  app.get('students', (req, res) => {
    res.json(Students);
});


// app.use((req, res, next) => {
//   console.log('Students');
//   next();
// });

app.use((err, req, res, next) => {
  res.status(500).send(UH-OH)
})

app.use((req, res, next) => {
  console.log(`Request received for ${req.url}`);
  next(express);
});


module.exports = router;
