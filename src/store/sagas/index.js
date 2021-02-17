import { all, fork } from 'redux-saga/effects';
import products from './products';

export default function* watchers() {
  yield all([
    products
  ].map(fork));
}