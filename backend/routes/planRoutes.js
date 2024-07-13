const express = require("express");
const planController = require("../controllers/planController.js");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js')
router.get("/", planController.getPlans);
router.get("/order-history", authMiddleware, planController.getOrderHistoryOfUser);
router.post("/", authMiddleware, planController.createPlan);
module.exports = router;
