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

module.exports = {
  createPlan,
};
