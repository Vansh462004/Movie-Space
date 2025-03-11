import { State } from "../store";
import { createSelector } from "reselect";

const showStateSelector = (state: State) => {
  return state.shows;
};

export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.query
);
export const showsLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.loading
);
export const showsMapSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

export const queryShowsMapSelector = createSelector(
  showStateSelector,
  (showState) => showState.queryShows
);

export const showsSelector = createSelector(
  showsMapSelector,
  showsQuerySelector,
  queryShowsMapSelector,
  (showsMap, query, queryShowsMap) =>
    queryShowsMap[query] &&
    queryShowsMap[query].map((showId) => showsMap[showId])
);

