require('dotenv').config();
const mongoose = require("mongoose");

// mongoose.connect(`mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@cluster0.5upsubo.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, ssl: true})
mongoose.connect('mongodb://localhost:27017/fakeshop',{useNewUrlParser: true, useUnifiedTopology: true, ssl: true})
const db = mongoose.connection;


db.on("error", error => console.log(error));
db.once("open", () => console.log("conexion con mongodb establecida"));

module.exports = mongoose;
