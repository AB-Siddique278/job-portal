const Jobs = require("../models/Job_info");

exports.createjobsService = async (data) => {
  const result = await Jobs.create(data);
  return result;
}


exports.getjobssService = async () => {
  const brands = await Jobs.find({}).select('-status');
  return brands;
}


exports.getjobsByIdService = async (id) => {
  const brand = await Jobs.findOne({ _id: id });
  return brand;
}


exports.updatejobsService = async (id, data) => {
  const result = await Jobs.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}

