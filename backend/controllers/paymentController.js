const catchAsync = require("../utils/catchAsync");
const paymentService = require("../services/paymentService");
const planService = require("../services/planService");
const httpStatus = require("http-status");

const checkout = catchAsync(async (req, res) => {
  const session = await paymentService.checkout(req.body);
  await planService.addPlanToUser(req.body, req.user._id);

  if (session) {
    res.status(httpStatus.OK).json({ url: session.url });
  } else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false });
  }
});

const verifyPayment = catchAsync(async (req, res) => {
  const isVerified = await paymentService.verifyPayment(req.body.sessionId);
  if (isVerified) {
    res.status(httpStatus.OK).json({ success: true });
  } else {
    res.status(httpStatus.BAD_REQUEST).json({ success: false });
  }
});

module.exports = {
  checkout,
  verifyPayment,
};
