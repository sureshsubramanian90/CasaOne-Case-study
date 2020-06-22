import { all, fork } from "redux-saga/effects";
import watchExampleRequest from "./ExampleSaga";

export default function* rootSaga() {
  yield all([fork(watchExampleRequest)]);
}
