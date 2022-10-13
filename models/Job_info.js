const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types
const jobInfoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a job name"],
        maxLength: 100,
        unique: true,
        lowercase: true,
    },
    description: String,
    email: {
        type: String,
        lowercase: true,
        //validate: [validator.isEmail, "Please provide a valid email"]
    },
    website: {
        type: String,
        //validate: [validator.isURL, "Please provide a valid url"]
    },
    location: String,
    salary: {
        type: Number,
        required: true,
        min: [0, 'salary dose not exist negative'],

    },
    jobtime: {
        type: Number,
        required: true,
        min: [0, 'Job day dose not exist negative'],
    },

    // jobs: [{
    //     type:ObjectId,
    //     ref:"Jobs"
    // }],

    // hiringmanager: [{
    //     name: String,
    //     contanctNumber: String,
    //     id: {
    //       type: ObjectId,
    //       ref: "Candidate_info"
    //     }
    //   }],
    
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
      }
},{
    timestamps: true
  })

  const Job_info = mongoose.model("Job_info", jobInfoSchema);

  module.exports = Job_info;