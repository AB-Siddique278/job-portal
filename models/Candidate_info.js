const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = mongoose.Schema.Types


const candidateInfoSchema = mongoose.Schema({

  Apply_info:[{
    type:ObjectId,
    ref:"Apply_info"
  }],
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a candidate name"],
    lowercase: true,
    unique: true,
  },
  decription: String,
  imageUrl: {
    type: String,
    
  },
  cvlink:{
    type: String,
    
  }
  
}, {
  timestamps: true
})

const Candidate_info = mongoose.model('Candidate_info',candidateInfoSchema)
module.exports=Candidate_info;