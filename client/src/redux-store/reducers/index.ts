import { combineReducers, Reducer } from "redux";

import authReducer from "./authReducer";
import basketReducer from "./basketReducer";
import catalogReducer from "./catalogReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  basket: basketReducer,
  catalog: catalogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
