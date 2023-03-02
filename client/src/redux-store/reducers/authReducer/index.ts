import {
  SIGNUP_REQUEST,
  SIGH_IN_ERROR,
  LOGIN_REQUEST,
  SIGH_IN_SUCCESSFULLY,
  SIGH_OUT_SUCCESSFULLY,
} from "../../../utils/constants/actionTypes";

import { AuthAction, AuthState } from "../../../interface/types";

const initialState: AuthState = {
  pending: false,
  token: "",
  error: null,
  loading: false,
  userData: null,
};

const reducers = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case SIGH_IN_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SIGH_IN_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case SIGH_OUT_SUCCESSFULLY:
      return {
        ...state,
        userData: null,
      };
    default:
      return state;
  }
};

export default reducers;
