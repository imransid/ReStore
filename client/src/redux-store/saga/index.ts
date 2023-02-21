import { takeEvery } from "redux-saga/effects";
import {
  SIGNUP_REQUEST,
  BASKET_REQUEST,
} from "../../utils/constants/actionTypes";

import { _signUp } from "./auth.saga";
import { _getBasket } from "./basket.saga";

const rootSaga = function* () {
  yield takeEvery(SIGNUP_REQUEST, _signUp);
  yield takeEvery(BASKET_REQUEST, _getBasket);
};

export default rootSaga;
