const mongoose = require("mongoose");
const validator = require("validator");
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types
const jobsSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a job name"],
        maxLength: 100,
        unique: true,
        lowercase: true,
    },
    
    company: {
        type: String,
        trim: true,
        required: [true, "Please provide a company name"],
        maxLength: 100,
        unique: true,
        lowercase: true,
    },

    vecancy: {
        type: Number,
        required: true,
        min: [0, 'salary dose not exist negative'],

    },
    applylastdate: {
        type: String,
        required: true,
    },
    
    workplace: {
        type: String,
        required: true,
    },
    location: String,


},{
    timestamps: true
  })

  const Jobs = mongoose.model("Jobs", jobsSchema);

  module.exports = Jobs;