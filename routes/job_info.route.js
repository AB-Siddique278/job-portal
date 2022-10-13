const express = require("express");
const job_infoController = require("../controllers/job_info.controller");

const router = express.Router();

router.route("/")
  .post(job_infoController.createjobs)
  .get(job_infoController.getjobs);

router.route("/:id")
  .get(job_infoController.getjobsById)
  .patch(job_infoController.updatejobs);


module.exports = router;