const express = require('express');
const app = express();
const port = 4000;
// const serveStatic = require('serve-static');

app.get('/Attendance', (req, res) => {
  res.redirect('https://www.myattendancetracker.com/')
})


  // app.listen(express, () => {
  //   console.log(`Server is running at http://localhost:${}`);
  // });

