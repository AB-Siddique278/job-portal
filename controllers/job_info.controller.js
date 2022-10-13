const {
    createjobsService,
    getjobssService,
    getjobsByIdService,
    updatejobsService,
  } = require("../services/job_info.service");
  
  
  exports.createjobs = async (req, res, next) => {
    try {
      const result = await createjobsService(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the brand"
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't create the brand"
      })
    }
  }
  
  
  exports.getjobs = async (req, res, next) => {
    try {
      const jobs = await getjobssService(req.body);
  
      res.status(200).json({
        status: "success",
        data: jobs
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't get the brands",
      });
    }
  };
  
  exports.getjobsById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const jobs = await getjobsByIdService(id);
  
      if(!jobs){
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a brand with this id"
        })
      }
  
      res.status(200).json({
        status: "success",
        data: jobs,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't get the brands",
      });
    }
  };
  
  exports.updatejobs = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await updatejobsService(id, req.body);
  
      console.log(result);
  
      if (!result.modifiedCount) {
        return res.status(400).json({
          status: "fail",
          message: "Couldn't update the jobInfo with this id",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Successfully updated the job info"
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't update the brand",
      });
    }
  };