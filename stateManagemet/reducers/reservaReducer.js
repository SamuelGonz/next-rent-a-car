import { types } from "../types";

// const initialState = {
//    oficinaSalida: 234234234,
//    oficinaDevolucion: 123123123,
//    fsalida: "27/02/2020",
//    fdevolucion: "02/03/2020",
//    hsalida: "10:00",
//    hdevolucion: "10:00",
// };

const initialState = {
   oficinaSalida: "",
   oficinaDevolucion: "",
   fechaSalida: "",
   fechaDevolucion: "",
   horaSalida: "",
   horaDevolucion: "",
   cantidadDias: "",
   grupoCar: null,
   payButton: false,
   referencia: "",
};

export const reservaReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.setOffice:
         return {
            ...state,
            oficinaSalida: action.payload[0],
            oficinaDevolucion: action.payload[1]
               ? action.payload[1]
               : action.payload[0],
         };

      case types.setTimes:
         return {
            ...state,
            horaSalida: action.payload[0],
            horaDevolucion: action.payload[1],
         };

      case types.setDates:
         return {
            ...state,
            fechaSalida: action.payload[0],
            fechaDevolucion: action.payload[1],
         };

      case types.setCountDays:
         return {
            ...state,
            cantidadDias: action.payload,
         };

      case types.setCar:
         return {
            ...state,
            grupoCar: action.payload,
         };

      case types.setPayButton:
         return {
            ...state,
            payButton: action.payload,
         };

      case types.setReferencia:
         return {
            ...state,
            referencia: action.payload,
         };

      default:
         return state;
   }
};
