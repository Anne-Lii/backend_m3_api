//code by Anne-Li Hansen

//include packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//init express
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/cv").then(()=> {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log("Error while connecting to database: " + err);
});

//Routes
app.get("/api", async (req, res) => {
res.json({message: " Välkommen"});
});

app.listen(port, () => {
console.log("Server is running on port: " + port);
});