import {
  SIGNUP_REQUEST,
  SIGH_IN_SUCCESSFULLY,
  LOGIN_REQUEST,
} from "../../utils/constants/actionTypes";
import {
  SignupRequest,
  SignupPayload,
  SignInPayload,
  SignInRequest,
  APIResponse,
  SignInSuccessfully,
} from "../../interface/types";

export const signupRequest = (payload: SignupPayload): SignupRequest => ({
  type: SIGNUP_REQUEST,
  payload,
});
export const signInRequest = (payload: SignInPayload): SignInRequest => ({
  type: LOGIN_REQUEST,
  payload,
});

export const signInRequestSuccess = (
  payload: APIResponse
): SignInSuccessfully => ({
  type: SIGH_IN_SUCCESSFULLY,
  payload,
});
