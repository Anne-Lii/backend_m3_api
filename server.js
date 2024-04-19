//code by Anne-Li Hansen

//include packages
const express = require("express");
const cors = require("cors");

//init express
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//Routes
app.get("/api", async (req, res) => {
res.json({message: " Välkommen"});
});

app.listen(port, () => {
console.log("Server is running on port: " + port);
});