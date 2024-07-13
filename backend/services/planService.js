const Plan = require("../models/Plan.js");
const User = require("../models/User.js");
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

async function addPlanToUser(body, userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    const plans = body.data;
    user.plans.push(...plans?.map((plan) => plan._id));
    await user.save();
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

async function getOrderHistoryOfUser(userId) {
  try {
    const user = await User.findById(userId).populate("plans");
    if (user) {
      console.log(user.plans)
      return user.plans;
    } else {
      throw new ApiError(httpStatus.BAD_REQUEST, "User not found");
    }
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

module.exports = {
  createPlan,
  getPlans,
  getOrderHistoryOfUser,
  addPlanToUser,
};
