const express = require("express");
const apply_infoController = require("../controllers/apply_info.controller");

const router = express.Router();

router.route("/")
  .post(apply_infoController.createapplys)
  .get(apply_infoController.getapplys);

router.route("/:id")
  .get(apply_infoController.getapplysById)
  .patch(apply_infoController.updateapplys);


module.exports = router;