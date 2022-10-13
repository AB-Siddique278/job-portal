const express = require("express");
const candidate_infoController = require("../controllers/candidate_info.controller");

const router = express.Router();

router.route("/")
  .post(candidate_infoController.createcandidates)
  .get(candidate_infoController.getcandidates);

router.route("/:id")
  .get(candidate_infoController.getcandidatesById)
  .patch(candidate_infoController.updatecandidates);


module.exports = router;

