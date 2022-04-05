const express = require('express')
const morgan = require('morgan')
const tasksRoutes = require('./api/routes/taskRoutes')
const mongoose = require("./api/db/db_connection");

const app = express()
 
const port = 3000

// JSON body parser 
app.use(express.json())
// morgan HTTP logger
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Welcome to our TODO APP. Productivity, at its finest.')
})

app.use('/v1', tasksRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})