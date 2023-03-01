import { call, put, select } from "redux-saga/effects";
import { SignInRequest, APIResponse } from "../../interface/types";

import {
  SIGH_IN_ERROR,
  SIGH_IN_SUCCESSFULLY,
} from "../../utils/constants/actionTypes";
import agent from "../../utils/api";
const _authApiCall = function* (action: any) {
  try {
    let res = true;
    return res;
  } catch (err) {
    console.log("Error in _authApiCall ", err);
  }
};

export const _signUp = function* (action: any) {
  try {
    let data = {
      username: action.data.userName,
      password: action.data.password,
    };

    const authStatus: boolean = yield call(_authApiCall, data);

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
  } catch (err) {
    console.log("Error in _signIn", err);
  }
};

export const _signIn = function* (action: SignInRequest) {
  try {
    let data = {
      username: action.payload.values.username,
      password: action.payload.values.password,
    };

    // const authStatus: any =
    let authRes: APIResponse = yield call(agent.auth.signIn, data);

    console.log(authRes);

    if (authRes) {
      yield put({
        type: SIGH_IN_SUCCESSFULLY,
        payload: authRes,
      });
    }
  } catch (err) {
    console.log("Error in _signIn", err);

    yield put({
      type: SIGH_IN_ERROR,
    });
  }
};
