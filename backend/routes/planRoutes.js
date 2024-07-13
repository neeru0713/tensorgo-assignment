const express = require("express");
const planController = require("../controllers/planController.js");
const router = express.Router();

router.post("/", planController.createPlan);
module.exports = router;
