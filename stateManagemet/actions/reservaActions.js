import { boolean } from "yup";
import { types } from "../types";

export const searchOffice = (office) => ({
   type: types.setOffice,
   payload: office,
});

export const setTime = (times) => ({
   type: types.setTimes,
   payload: times,
});

export const setDatesAction = (dates) => ({
   type: types.setDates,
   payload: dates,
});

export const setCountDays = (days) => ({
   type: types.setCountDays,
   payload: days,
});

export const setCar = (car) => ({
   type: types.setCar,
   payload: car,
});

export const setPayButton = (bolean) => ({
   type: types.setPayButton,
   payload: bolean,
});

export const setReferencia = (referencia) => ({
   type: types.setReferencia,
   payload: referencia,
});
