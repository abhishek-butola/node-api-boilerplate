const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')


const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Connect to Mongo DB


//Routes

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`))
