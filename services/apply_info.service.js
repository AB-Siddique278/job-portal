const Apply = require("../models/Apply_info");

exports.createapplyService = async (data) => {
  const result = await Apply.create(data);
  return result;
}


exports.getapplysService = async () => {
  const applys = await Apply.find({}).select('-status');
  return applys;
}


exports.getapplyByIdService = async (id) => {
  const apply = await Apply.findOne({ _id: id });
  return apply;
}


exports.updateapplysService = async (id, data) => {
  const result = await Apply.updateOne({ _id: id }, data, {
    runValidators: true
  });
  return result;
}

