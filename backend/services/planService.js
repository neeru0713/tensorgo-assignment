const Plan = require("../models/Plan.js");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

async function createPlan(planBody) {
  try {
    const plan = new Plan(planBody);
    const result = await plan.save();
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

async function getPlans() {
  try {
    const plans = Plan.find({});
    return plans;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

module.exports = {
  createPlan,
  getPlans,
};
