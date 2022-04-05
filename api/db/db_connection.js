var mongoose = require ('mongoose');
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

module.exports = exports = mongoose;