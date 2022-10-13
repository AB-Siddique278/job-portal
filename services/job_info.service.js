const Jobs = require("../models/Job_info");

exports.createjobsService = async (data) => {
  const result = await Jobs.create(data);
  return result;
}


exports.getjobssService = async () => {
  const result = await Jobs.find({}).select('-status');
  return result;
}


exports.getjobsByIdService = async (id) => {
  const result = await Jobs.findOne({ _id: id });
  return result;
}


exports.updatejobsService = async (id, data) => {
  const result = await Jobs.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}

