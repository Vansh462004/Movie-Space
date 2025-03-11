import { AnyAction } from "redux";
import { produce } from "immer";
import { Show } from "../models/Show";
import { SHOW_DETAIL_LOADED } from "../Actions/show";
import { normalize, schema } from "normalizr";

export type State = {
  shows: { [showId: number]: Show };
  queryShows: { [query: string]: number[] };
  query: string;
  show_loading: { [showId: number]: boolean };
  loading: boolean;
};

export const initialState: State = {
  shows: {},
  queryShows: {},
  query: "",
  show_loading: {},
  loading: false,
};

function showReducer(currState = initialState, action: AnyAction): State {
  switch (action.type) {
    // case SHOW_DETAIL_LOADED:
    //   return produce(currState, (draft) => {
    //     const show = action.payload as Show;
    //     draft.shows[show.id] = show;
    //   });
    default:
      return currState;
  }
}

export default showReducer;

// import { AnyAction } from "redux"

// export type State = {}

// export const initialState:State = {}

// function showReducer (currState = initialState,action:AnyAction) {
//     switch(action.type){

//         default:
//             return currState;
//     }
// }

// export default showReducer;
