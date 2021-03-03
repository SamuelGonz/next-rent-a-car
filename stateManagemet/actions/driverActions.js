import { types } from "../types";

export const setDriverData = (data) => ({
   type: types.setDriver,
   payload: data,
});
