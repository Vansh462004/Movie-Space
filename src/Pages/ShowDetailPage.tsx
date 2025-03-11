import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import PillButton from "../Components/PillButton";
import { IoArrowBack } from "react-icons/io5";
import { FC, useEffect } from "react";
import { State } from "../store";
import withRouter, { WithRouterProps } from "../Hoc/withRouter";
import { ConnectedProps, connect } from "react-redux";
import { showsMapSelector } from "../Selectors/Shows";
import { loadShowAction } from "../Actions/show";
import CastCard from "../Components/CastCard";

type ownProps = WithRouterProps;
type ShowDetailPageProps = ownProps & ReduxProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  show,
  loadShow,
}) => {
  const id = params.id;

  useEffect(() => {
    loadShow(id);
  }, [id]);

  console.log("show", show);

  if (!show) {
    return <ImSpinner className="animate-spin text-4xl text-blue-500" />;
  }
  return (
    <>
      <div className="mt-2">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-gray-700"
        >
          <IoArrowBack className="font-semibold text-xl" /> Back{" "}
        </Link>
        <h2 className="font-semibold text-4xl">{show.name}</h2>
        <div className="flex bg-gray-400 p-2 space-x-3 my-2 rounded-md">
          {show.genres.map((m) => (
            <PillButton key={m}>{m}</PillButton>
          ))}
        </div>
        <div className="mt-2 flex">
          <img
            src={
              show.image?.medium ||
              "https://images.unsplash.com/photo-1582134534988-f8bcfc928273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D"
            }
            alt=""
            className="object-cover object-center w-full h-72 rounded-t-md"
          />
          <div>
            <p dangerouslySetInnerHTML={{ __html: show.summary || "" }}></p>
            <p className="text-lg mt-2 font-bold border border-grray-600 rounded-md px-2 py-1 max-w-max">
              Rating:{" "}
              <span className="text-gray-700">{show.rating.average}/10</span>
            </p>
          </div>
        </div>
        <div className="mt-2">
          <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
          <div className="flex flex-wrap">
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
              name="Henry Cavill"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
              name="Freya Allan"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
              name="Anya Chalotra"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
              name="Mimi Ndiweni"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
              name="Henry Cavill"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
              name="Freya Allan"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
              name="Anya Chalotra"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
              name="Mimi Ndiweni"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
              name="Henry Cavill"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
              name="Freya Allan"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
              name="Anya Chalotra"
            />
            <CastCard
              avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
              name="Mimi Ndiweni"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: State, ownProps: WithRouterProps) => {
  return { show: showsMapSelector(state)[+ownProps.params.id!] };
};

const mapDispatchToProps = {
  loadShow: loadShowAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
