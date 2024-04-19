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

const localUrl = "mongodb://127.0.0.1:27017/jobs";
const externalUrl = "mongodb://51.140.210.101:27017/jobs"; // Använd din virtuella IP-adress här

//connect to MongoDB
mongoose.connect(externalUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to MongoDB");
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
const Job = mongoose.model("Job", jobSchedule );

//Routes
app.get("/", async (req, res) => {
res.json({message: " Välkommen"});
});

//GET
app.get ("/jobs", async (req, res) => {
    try {
        let result = await Job.find({});
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//POST
app.post ("/jobs", async (req, res) => {
   try {
        let result = await Job.create(req.body);
        return res.json(result);
   } catch (err) {
        return res.status(400).json(err);
}
});

//PUT
app.put ("/jobs/:id", async (req, res) => {
    try {
         let job = await Job.findByIdAndUpdate(req.params.id, req.body, { new:true});
         return res.json(job);
    } catch (err) {
         return res.status(400).json(err);
}
});

//DELETE
app.delete("/jobs/:id", async (req, res) => {
    try {
         await Job.findByIdAndDelete(req.params.id);
         return res.json({message: "Jobb raderat"});
    } catch (err) {
         return res.status(500).json(err);
}
});

//run app
app.listen(port, () => {
console.log("Server is running on port: " + port);
});