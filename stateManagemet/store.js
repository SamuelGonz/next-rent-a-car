import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import { reservaReducer } from "./reducers/reservaReducer";
import { driverReducer } from "./reducers/driverReducer";

const reducers = combineReducers({
   reserva: reservaReducer,
   driver: driverReducer,
});

const composeEnhancers =
   (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

export const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunk))
);
