const cors = require('cors')
const helmet = require("helmet");
const express = require('express')
const app = express()

// Routes
const gamesRouter = require('./routes/games-router.routes')

// Permisos de Cors
app.use(cors())

// Helmet
app.use(helmet());

//database
require("./utils/mongodb")

app.use('/api/games', gamesRouter)

app.listen(3002, () => {
  console.log('http://localhost:3002')
})