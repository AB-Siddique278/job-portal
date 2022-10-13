const {
    createcandidateService,
    getcandidatesService,
    getcandidateByIdService,
    updatecandidatesService,
  } = require("../services/candidate_info.service");
  
  
  exports.createcandidates = async (req, res, next) => {
    try {
      const result = await createcandidateService(req.body);
  
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
  
  
  exports.getcandidates = async (req, res, next) => {
    try {
      const applys = await getcandidatesService(req.body);
  
      res.status(200).json({
        status: "success",
        data: applys
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't get the brands",
      });
    }
  };
  
  exports.getcandidatesById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const applys = await  getcandidateByIdService(id);
  
      if(!applys){
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a brand with this id"
        })
      }
  
      res.status(200).json({
        status: "success",
        data: applys,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't get the brands",
      });
    }
  };
  
  exports.updatecandidates = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await updatecandidatesService(id, req.body);
  
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