import {
  SIGNUP_REQUEST,
  LOGIN_REQUEST,
  SIGH_IN_ERROR,
  SIGH_IN_SUCCESSFULLY,
  SIGH_OUT_SUCCESSFULLY,
} from "../utils/constants/actionTypes";

export interface IAuth {
  token: string;
}

export interface AuthState {
  pending: boolean;
  token: string;
  error: string | null;
  loading: boolean;
  userData: APIResponse | null;
}

export interface SignupPayload {
  values: { username: string; password: string };
  callback: any;
}

export interface SignInPayload {
  values: { username: string; password: string };
}

export interface SignInRequest {
  type: typeof LOGIN_REQUEST;
  payload: SignInPayload;
}

export interface SignInRequest {
  type: typeof LOGIN_REQUEST;
  payload: SignInPayload;
}

export interface SignupRequest {
  type: typeof SIGNUP_REQUEST;
  payload: SignupPayload;
}

export interface APIResponse {
  email: string;
  userName: string;
  token: string;
}

export interface LoginSuccess {
  type: typeof SIGNUP_REQUEST;
  payload: SignInPayload;
}

export interface authFailed {
  type: typeof SIGH_IN_ERROR;
}

export interface LoginReq {
  type: typeof LOGIN_REQUEST;
}
export interface SignInSuccessfully {
  type: typeof SIGH_IN_SUCCESSFULLY;
  payload: APIResponse;
}

export interface SignOutSuccessfully {
  type: typeof SIGH_OUT_SUCCESSFULLY;
}

export type AuthAction =
  | SignupRequest
  | LoginSuccess
  | authFailed
  | LoginReq
  | SignInSuccessfully
  | SignOutSuccessfully;
