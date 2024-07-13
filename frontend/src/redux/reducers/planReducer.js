import { PLAN_SUCCESS, PLAN_FAIL } from "../types";
const initialState = {
  plans: [],
  createdPlan: {
    planName: "",
    description: "",
    price: "",
    userLimit: "",
  }
 
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAN_SUCCESS:
      return {
        plans: action.payload?.plans ? [...action.payload?.plans] : [],
        createdPlan: action.payload?.plan ? action.payload?.plan : state.createdPlan,
      };
    case PLAN_FAIL:
      return state;
    default:
      return state;
  }
};

export default planReducer;
