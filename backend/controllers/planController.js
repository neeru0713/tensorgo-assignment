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

module.exports = {
  createPlan,
  getPlans
};
