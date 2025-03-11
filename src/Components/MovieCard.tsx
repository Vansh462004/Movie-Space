import { FC } from "react";
import { Link } from "react-router-dom";
import { Show } from "../models/Show";

type MovieCardProps = {
  show: Show;
};

const MovieCard: FC<MovieCardProps> = ({ show }) => {
  const placeholderImage =
    "https://plus.unsplash.com/premium_photo-1680859126164-ac4fd8f56625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="max-w-xs p-2 m-1 shadow-md rounded-md">
      <img
        src={show.image?.medium || show.image?.original || placeholderImage}
        alt="show pic"
        className="object-center object-cover rounded-t-md w-full h-72"
      />
      <div className="flex flex-col justify-between space-y-8 p-4">
        <div className="space-y-2">
          <h2 className="font-semibold text-3xl">{show.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary || "" }}></p>
        </div>
        <Link
          to={"/" + show.id}
          className="flex justify-center items-center w-full rounded-md font-semibold p-3"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
