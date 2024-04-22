//code by Anne-Li Hansen

//include packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: './.env' });

//init express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {

}).then(() => {
    console.log("connected to MongoDB", mongoose.connection.db.databaseName);
}).catch((err) => {
    console.log("Error while connecting to database: " + err);
});


//schedule for jobs
const jobSchedule = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Fyll i företagets namn"]
    },
    location: {
        type: String,
        required: [true, "Fyll i stad"]
    },
    jobtitle: {
        type: String,
        required: [true, "Fyll i jobbtitel"]
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
const Job = mongoose.model("Job", jobSchedule);

//Routes
app.get("/", async (req, res) => {
    res.json({ message: " Välkommen till mitt API" });
});

//GET
app.get("/jobs", async (req, res) => {
    try {
        let result = await Job.find({});
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//POST
app.post("/jobs", async (req, res) => {
    try {
        let result = await Job.create(req.body);
        return res.json(result);
    } catch (err) {
        return res.status(400).json(err);
    }
});

//PUT
app.put("/jobs/:id", async (req, res) => {
    try {
        let job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(job);
    } catch (err) {
        return res.status(400).json(err);
    }
});

//DELETE
app.delete("/jobs/:id", async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        return res.json({ message: "Jobb raderat" });
    } catch (err) {
        return res.status(500).json(err);
    }
});

//run app
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});