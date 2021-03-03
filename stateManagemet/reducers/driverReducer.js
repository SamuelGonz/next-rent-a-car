import { types } from "../types";

const initialState = {
   name: "",
   lastname: "",
   phone: "",
   email: "",
};

export const driverReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.setDriver:
         return {
            ...state,
            ...action.payload,
         };
      default:
         return state;
   }
};
