
import { combineReducers } from "redux"

import authReducer from "./authReducer"

const rootReducer = combineReducers({
    auth : authReducer
})


export type AuthState = ReturnType<typeof rootReducer>

export default rootReducer