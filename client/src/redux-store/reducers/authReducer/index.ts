import { SIGNUP_REQUEST } from "../../../utils/constants/actionTypes"

import {AuthAction, AuthState} from "../../../interface/types"

const initialState : AuthState = {
    pending : false,
    token : "",
    error : null
}


const reducers = (state = initialState, action: AuthAction) => {

    switch(action.type){
        case SIGNUP_REQUEST: 
            return {
                ...state,
                pending : true
            }
        default:
            return {
                ...state
            }
    }
}


export default reducers