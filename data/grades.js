const express = require('express');
const app = express();
const port = 4000;
// const serveStatic = require('serve-static');

app.get("/grades", (req, res) => {
    res.send("Third page!");
  });



  // module.exports = Grades;