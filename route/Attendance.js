const express = require('express');
const app = express();
const port = 4000;
// const serveStatic = require('serve-static');
const router = express.Router();

// Define a route to handle GET requests to the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit-form', (req, res) => {
  const { title, content } = req.body;
  // console.log('TEST');
  res.redirect('/thank-you');
});

app.get('/Attendance', (req, res) => {
  res.redirect('https://www.myattendancetracker.com/');
});




  module.exports = router;