
import { type } from "os";
import {SIGNUP_REQUEST} from "../utils/constants/actionTypes";

export interface IAuth {
    token: string;
}

export interface AuthState {
    pending: boolean;
    token: string;
    error : string|null;
}

export interface SignupPayload {
    values: {email: string, password: string}
    callback: any
}

export interface SignInPayload {
    values: {email: string, password: string}
    callback: any
}

export interface SignupRequest {
    type: typeof SIGNUP_REQUEST,
    payload: SignupPayload
}

export interface LoginSuccess {
    type: typeof SIGNUP_REQUEST,
    payload: SignInPayload
}

export type AuthAction = SignupRequest | LoginSuccess