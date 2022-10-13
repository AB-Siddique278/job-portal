const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types

const applyInfoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please provide a candidate name"],
        maxLength: 100,
        unique: true,
        lowercase: true,
    },

    jobname:{
        type: String,
        trim: true,
        required: [true, "Please provide a job name"],
        maxLength: 100,
        unique: true,
        lowercase: true,

    },

    applydate: {
        type: String,
        required: true,
    },
    
    exprince: {
        type: String,
        required: true,
    },
   
    cvlink:{
        type: String,
        required: [true, "Please provide a candidate name"],
      },

    location: String,


},{
    timestamps: true
  })

  const Apply_info = mongoose.model("Apply_info", applyInfoSchema);

  module.exports = Apply_info;