import { takeEvery } from "redux-saga/effects";
import {
  SIGNUP_REQUEST,
  BASKET_REQUEST,
  CATALOG_REQUEST,
} from "../../utils/constants/actionTypes";

import { _signUp } from "./auth.saga";
import { _getBasket } from "./basket.saga";
import { _catalogItemLoad } from "./catalog.saga";

const rootSaga = function* () {
  yield takeEvery(SIGNUP_REQUEST, _signUp);
  yield takeEvery(BASKET_REQUEST, _getBasket);
  yield takeEvery(CATALOG_REQUEST, _catalogItemLoad);
};

export default rootSaga;
