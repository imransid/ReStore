import {takeEvery} from 'redux-saga/effects';
import {SIGNUP_REQUEST} from "../../utils/constants/actionTypes"

import {_signUp} from './auth.saga';

const rootSaga = function* () {
    yield takeEvery(SIGNUP_REQUEST, _signUp);
  };
  
  export default rootSaga;