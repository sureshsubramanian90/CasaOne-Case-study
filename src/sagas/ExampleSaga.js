import { put, call, takeLatest, select } from 'redux-saga/effects';
import get from 'lodash/get';
import { exampleApi } from '../interfaces/Example/ExampleApi';
import { data } from '../mock/getData';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  SUBMIT_DATA,
  DELETE_RULE_FROM_LIST,
} from '../actionTypes/RuleActionTypes';

function* exampleSaga(action) {
  try {
    const params = action.payload;
    const result = yield call(exampleApi.getData, params);
    console.log(result);
    if (result.isSuccess) {
      yield put({ type: GET_DATA_SUCCESS, data });
    } else {
      yield put({ type: GET_DATA_ERROR, error: {
        errorMessage: 'Please try again later'
      } });
    }
  } catch (err) {
    yield put({ type: GET_DATA_ERROR, error: {
      errorMessage: 'Please try again later'
    } });
  }
}
export const storeData = state => state.data;

function* submitSaga(action) {
  try {
    const value = yield select(storeData);
    const params = {
      id: get(value, 'focusedRule.currentId', ''),
      data: get(value, 'focusedRule.data', []),
    }
    const result = yield call(exampleApi.submitData, params);
    if (result.isSuccess) {
      yield put({ type: GET_DATA_SUCCESS, data });
    } else {
      yield put({ type: GET_DATA_ERROR, error: {
        errorMessage: 'Please try again later'
      } });
    }
  } catch (err) {
    yield put({ type: GET_DATA_ERROR, error: {
      errorMessage: 'Please try again later'
    } });
  }
}

function* deleteSaga(action) {
  try {
    const { payload } = action;
    const value = yield select(storeData);
    const storedata = get(value, 'rulesList', {});
    const params = {
      id: storedata[payload.index].id,
    }
    console.log(params);
    const result = yield call(exampleApi.deleteData, params);
    if (result.isSuccess) {
      yield put({ type: GET_DATA_SUCCESS, data });
    } else {
      yield put({ type: GET_DATA_ERROR, error: {
        errorMessage: 'Please try again later'
      }});
    }
  } catch (err) {
    yield put({ type: GET_DATA_ERROR, error: {
      errorMessage: 'Please try again later'
    } });
  }
}

export default function* watchExampleRequest() {
  yield takeLatest(GET_DATA, exampleSaga);
  yield takeLatest(SUBMIT_DATA, submitSaga);
  yield takeLatest(DELETE_RULE_FROM_LIST, deleteSaga);
}
