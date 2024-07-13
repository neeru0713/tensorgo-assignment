const planService = require("../services/planService");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const createPlan = catchAsync(async (req, res) => {
  let plan = await planService.createPlan(req.body);
  let resObj = {
    plan,
    message: "Plan creation successful",
  };
  res.status(httpStatus.CREATED).json(resObj);
});

const getPlans = catchAsync(async (req, res) => {
  let plans = await planService.getPlans();
  let resObj = {
    plans
  };
  res.status(httpStatus.OK).json(resObj);
});

const addPlanToUserController = async (req, res) => {
  const { userId, planId } = req.body;

  try {
    const updatedUser = await addPlanToUser(userId, planId);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

module.exports = {
  createPlan,
  getPlans
};
