import { AxiosResponse } from "axios";
import { call, put, select } from "redux-saga/effects";
import agent from "../../utils/api";
import { BASKET_LOAD_SUCCESSFULLY } from "../../utils/constants/actionTypes";

export const _getBasket = function* (action: any) {
  try {
    const response: AxiosResponse = yield call(agent.Basket.get);

    //   if (response) {
    yield put({
      type: BASKET_LOAD_SUCCESSFULLY,
      payload: response,
    });
    //   } else {
    //     yield put({
    //       type: SIGH_IN_ERROR,
    //       payload: {
    //         msg: authStatus.msg,
    //       },
    //     });
    //   }
  } catch (err) {
    console.log("Error in _getBasket", err);
  }
};
