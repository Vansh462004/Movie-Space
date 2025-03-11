import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Show } from "../models/Show";

const showsAdaptor = createEntityAdapter();

const initialState = showsAdaptor.getInitialState({
  queryShows: {} as { [query: string]: number[] },
  query: "",
  show_loading: {} as { [showId: number]: boolean },
  loading: false,
});

export type State = typeof initialState;

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    showsLoaded,
    showsQueryChanged,
    showsDetailLoaded: showsAdaptor.addOne,
  },
});

function showsLoaded(state: State, action: PayloadAction<Show[]>) {
  const shows = action.payload as Show[];
  if (!shows || shows.length === 0) {
    return;
  }

  state.queryShows[state.query] = shows.map((m) => m.id);
  state.loading = false;
  showsAdaptor.addMany(state, action);
}

function showsQueryChanged(state: State, action: PayloadAction<string>) {
  state.query = action.payload;
  state.loading = true;
}

const { actions, reducer: showsReducer } = showSlice;

export const {
  showsLoaded: showsLoadedAction,
  showsQueryChanged: showsQueryChangeAction,
  showsDetailLoaded: showLoadedAction,
} = actions;
export default showsReducer;
