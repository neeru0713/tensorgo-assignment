import { SHOW_NOTIFICATION, CLOSE_NOTIFICATION } from "../types";
const initialState = {
    message: "",
    type: "",
    visible: false
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
       message: action.payload?.message,
       type: action.payload?.type,
       visible: true
      };
    case CLOSE_NOTIFICATION:
        return {
            message: action.payload?.message,
            type: action.payload?.type,
            visible: false
           };
    default:
      return state;
  }
};

export default planReducer;
