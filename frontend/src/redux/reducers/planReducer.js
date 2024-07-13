import { PLAN_SUCCESS, PLAN_FAIL } from "../types";
const initialState = {
  planName: "",
  description: "",
  price: "",
  userLimit: "",
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAN_SUCCESS:
      return {
        ...action.payload?.plan,
      };
    case PLAN_FAIL:
      return state;
    default:
      return state;
  }
};

export default planReducer;
