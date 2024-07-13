const Plan = require("../models/Plan.js");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const dotenv = require("dotenv");
const path = require("path");

const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(__dirname, "..", envFile) });

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

async function checkout(body) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: body?.data?.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.planName,
            },
            unit_amount: item.price !== "Free" ? parseInt(item.price, 10) * 100 : 0,
          },
          quantity: 1,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    console.log("inside checkout service : ", session)
    return session;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

async function verifyPayment(sessionId) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
}

module.exports = {
  checkout,
  verifyPayment,
};
