const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


//middlewares
app.use(express.json());
app.use(cors());

//routes

const job_infoRoute = require("./routes/job_info.route");
const apply_infoRoute = require("./routes/apply_info.route");
const candidate_infoRoute = require("./routes/Candidate_info.router");
const userRoute = require("./routes/user.route");
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});



app.use("/api/manager/jobs", job_infoRoute); //joninfo
app.use("/api/v1/jobs", apply_infoRoute);     
app.use("/api/v1/candidate", candidate_infoRoute);     
app.use("/api/v1/user", userRoute);
module.exports = app;

