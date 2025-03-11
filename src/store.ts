import showReducer from "./slices/Show";
import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import { LOAD_SHOW } from "./Actions/show";
import { fetchShowDetail, fetchShows } from "./sagas/shows";
import { showsQueryChangeAction } from "./slices/Show";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    shows: showReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

function* rootSaga() {
  yield debounce(350, showsQueryChangeAction, fetchShows);
  yield takeEvery(LOAD_SHOW, fetchShowDetail);
}

sagaMiddleWare.run(rootSaga);

export type State = ReturnType<typeof store.getState>;

export default store;
