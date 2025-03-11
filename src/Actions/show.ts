import ActionCreator from ".";
import { Show } from "../models/Show";

// export const SHOWS_LOADED = "SHOWS_LOADED";

// export const showsLoadedAction: ActionCreator<Show[]> = (shows: Show[]) => ({
//   type: SHOWS_LOADED,
//   payload: shows,
// });

// export const SHOWS_QUERY_CHANGED = "SHOWS_QUERY_CHANGED";

// export const showsQueryChangeAction: ActionCreator<string> = (
//   query: string
// ) => ({
//   type: SHOWS_QUERY_CHANGED,
//   payload: query,
// });

// export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

// export const showLoadedAction: ActionCreator<Show> = (show: Show) => ({
//   type: SHOW_DETAIL_LOADED,
//   payload: show,
// });

export const LOAD_SHOW = "LOAD_SHOW";

export const loadShowAction: ActionCreator<number> = (id: number) => ({
  type: LOAD_SHOW,
  payload: +id,
});
