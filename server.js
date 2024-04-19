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
mongoose.connect("mongodb://127.0.0.1:27017/jobs").then(()=> {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log("Error while connecting to database: " + err);
});

//schedule for jobs
const jobSchedule = new mongoose.Schema({
    companyname: {
        type: String, 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    jobtitle: {
        type: String, 
        required: true
    },
    describtion: {
        type: String, 
        required: false
    },
    stardate: {
        type: Date, 
        required: false
    },
    enddate: {
        type: Date, 
        required: false
    }
});

//include schedule
const Job = mongoose.model("Job", jobSchedule );

//Routes
app.get("/", async (req, res) => {
res.json({message: " Välkommen"});
});

app.get ("/jobs", async (req, res) => {
    try {
        let result = await Job.find({});
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

app.post ("/jobs", async (req, res) => {
   try {
        let result = await Job.create(req.body);
        return res.json(result);
   } catch (err) {
        return res.status(400).json(err);
}
});


app.listen(port, () => {
console.log("Server is running on port: " + port);
});