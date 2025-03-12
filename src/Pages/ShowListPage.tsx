import { FC } from "react";
import MovieCard from "../Components/MovieCard";
import SearchBar from "../Components/SearchBar";
import { showsQueryChangeAction } from "../slices/Show";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import {
  showsLoadingSelector,
  showsQuerySelector,
  showsSelector,
} from "../Selectors/Shows";
import { ImSpinner } from "react-icons/im";

type ShowListPageProps = {} & ReduxProps;

const ShowListPage: FC<ShowListPageProps> = ({
  showsQueryChanged,
  query,
  shows,
  loading,
}) => {
  return (
    <>
      <div className="flex space-x-2">
        <SearchBar
          value={query}
          onChange={(event) => {
            showsQueryChanged(event.target.value);
          }}
        />
        {(loading && query.length > 0) && (
          <ImSpinner className="animate-spin text-4xl text-blue-500" />)}
        {(loading && !query.length) && (<span className="text-red-500">Enter a valid query!!</span>)}
      </div>
      <div className="mt-2 flex flex-wrap">
        {shows &&
          shows.map((item) => (
            <MovieCard key={item.id} show={item}></MovieCard>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: State) => {
  return {
    shows: showsSelector(state),
    query: showsQuerySelector(state),
    loading: showsLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  showsQueryChanged: showsQueryChangeAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShowListPage);
