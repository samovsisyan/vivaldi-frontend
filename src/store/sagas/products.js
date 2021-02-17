import {takeLatest, call, put} from 'redux-saga/effects';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from '../actions/products';

import Api from '../../Api';

function* handleGetProducts() {
  try {
    const {data} = yield call(Api.getProducts);
    yield put({
      type: GET_PRODUCTS_SUCCESS,
      payload: {data},
    });
  } catch (e) {
    console.warn(e);
    yield put({
      type: GET_PRODUCTS_FAIL,
      message: e.message,
    });
  }
}

export default function* watcher() {
  yield takeLatest(GET_PRODUCTS_REQUEST, handleGetProducts);
}
