import axios from "axios";
import { Show } from "./models/Show";

// export const searchShows = async (keyword: string): Promise<Show[]> => {
//   try {
//     const response = await axios.get<{ show: Show }[]>(
//       `https://api.tvmaze.com/search/shows?q=${keyword}`
//     );
//     return response.data.map((item) => item.show);
//   } catch (error) {
//     console.error("Error fetching shows:", error);
//     throw error;
//   }
// };

// The cast API we were told to make in lecture 54
export const searchShows = async (
  keyword: string
): Promise<{ show: Show; cast: any[] }[]> => {
  const response = await axios.get<{ show: Show; cast: any }[]>(
    `https://api.tvmaze.com/search/shows?q=${keyword}`
  );

  const shows = response.data.map((item) => item.show);

  const castPromises = [];
  for (let i = 0; i < shows.length; i++) {
    castPromises.push(getCast(shows[i]));
  }
  return Promise.all(castPromises);
};
const getCast = async (show: Show) => {
  const castResponse = await axios.get(
    "https://api.tvmaze.com/shows/" + show.id + "/cast"
  );
  const cast = castResponse.data.map((item: any) => item.person);
  return { show, cast };
};

export const loadShowDetail = async (id: number): Promise<Show> => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching show detail:", error);
    throw error;
  }
};
