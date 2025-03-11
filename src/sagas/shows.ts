import { AnyAction } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { loadShowDetail, searchShows } from "../api";
import { showsLoadedAction } from "../slices/Show";
import { showLoadedAction } from "../slices/Show";

export function* fetchShows(action: AnyAction): Generator<any, any, any> {
  const showsAndCast = yield call(searchShows, action.payload);
  const shows = showsAndCast.map((item: any) => item.show);
  yield put(showsLoadedAction(shows));
}

export function* fetchShowDetail(action: AnyAction): Generator<any, any, any> {
  const show = yield call(loadShowDetail, action.payload);
  yield put(showLoadedAction(show));
}
