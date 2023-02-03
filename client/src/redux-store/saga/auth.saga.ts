

import {call, put, select} from 'redux-saga/effects';
import axios from 'axios';
import {SIGNUP_REQUEST} from '../../utils/constants/actionTypes';
const _authApiCall = function* (action : any) {
  try {
    let res = true
    return res
  }catch(err){
    console.log("Error in _authApiCall ", err)
  }
}

export const _signUp = function* (action : any) {
    try {

        let data = {
            username: action.data.userName,
            password: action.data.password,
          };
      
          const authStatus : boolean = yield call(_authApiCall, data);
      
        //   if (authStatus.status) {
        //     yield put({
        //       type: SIGH_IN_SUCCESSFULLY,
        //       payload: {
        //         username: authStatus.username,
        //         token: authStatus.token,
        //         expireTime: authStatus.expireTime,
        //         userAllData: authStatus.userAllData,
        //       },
        //     });
        //   } else {
        //     yield put({
        //       type: SIGH_IN_ERROR,
        //       payload: {
        //         msg: authStatus.msg,
        //       },
        //     });
        //   }

    }catch(err){
        console.log("Error in _signIn", err)
    }}