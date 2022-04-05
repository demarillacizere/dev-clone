const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const tasksRoutes = require('./routes/taskRoutes')

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

mongoose.connect(
    `mongodb+srv://dema:8Gl8Oatk62zXPL7i@cluster0.1uax9.mongodb.net/toDoDatabase?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
//test mongodb connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})