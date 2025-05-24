import axios from "axios";
import MovieModel from "../models/movieModel";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTRiMzZkMzc5MzBmY2Y3Y2M3MmE2MWQ1ODQyNDUwMiIsIm5iZiI6MTczNzgxNzMxNy4xODUsInN1YiI6IjY3OTRmY2U1MDljMjUyZTNhYjIzNzcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ATo67-DvKXZECcZayRHF5w6W-Z99YF6r2S-jx9b6i6o";
const ACCESS_TOKEN = "894b36d37930fcf7cc72a61d58424502";
//         const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");

const baseURL = "https://api.themoviedb.org/3";
class MovieController {
  static async fetchPopularMovies() {
    try {
      const response = await axios.get(
        `${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${ACCESS_TOKEN}`
      );

      return response.data.results.map(
        (movie) =>
          new MovieModel(
            movie.id,
            movie.title,
            movie.overview,
            movie.poster_path,
            movie.release_date,
            movie.vote_average
          )
      );
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      return [];
    }
  }
}
export default MovieController;
