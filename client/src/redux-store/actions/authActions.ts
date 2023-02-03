import {SIGNUP_REQUEST} from "../../utils/constants/actionTypes";
import {SignupRequest, SignupPayload} from "../../interface/types";


export const signupRequest = (payload : SignupPayload): SignupRequest => ({
    type : SIGNUP_REQUEST,
    payload 
})