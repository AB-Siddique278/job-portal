const candidate = require("../models/Candidate_info");

exports. createcandidateService = async (data) => {
  const result = await candidate.create(data);
  return result;
}


exports.getcandidatesService = async () => {
  const candidates = await candidate.find({}).select('-status');
  return candidates;
}


exports. getcandidateByIdService = async (id) => {
  const candidates = await candidate.findOne({ _id: id });
  return candidates;
}


exports. updatecandidatesService = async (id, data) => {
  const result = await candidate.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}

