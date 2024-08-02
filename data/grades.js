const express = require('express');
const app = express();
const port = 4000;
const serveStatic = require('serve-static');

app.get("/grades", (req, res) => {
    res.send("Third page!");
  });

  app.use(serveStatic, (req,res) => {
    res.status(500).send(err.message)
   });

  // module.exports = Grades;