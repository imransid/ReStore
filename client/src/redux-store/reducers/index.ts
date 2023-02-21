import { combineReducers } from "redux";

import authReducer from "./authReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  basket: basketReducer,
});

export type AuthState = ReturnType<typeof rootReducer>;

export default rootReducer;
