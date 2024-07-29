const index = require('./index')

const express = require('express');
const route = express.Router();
//middleware
route.use((req, res, next) => {
    console.log('testing testing 1 2 3')
})

