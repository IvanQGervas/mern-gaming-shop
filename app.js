const express = require('express')
const app = express()
 

//database
require("./utils/mongodb")


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, () => {
    console.log('http://localhost:3000')
})