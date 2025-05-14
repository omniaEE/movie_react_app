import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTRiMzZkMzc5MzBmY2Y3Y2M3MmE2MWQ1ODQyNDUwMiIsIm5iZiI6MTczNzgxNzMxNy4xODUsInN1YiI6IjY3OTRmY2U1MDljMjUyZTNhYjIzNzcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ATo67-DvKXZECcZayRHF5w6W-Z99YF6r2S-jx9b6i6o";
const ACCESS_TOKEN = "894b36d37930fcf7cc72a61d58424502";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});
export const fetchPopularMovies = async () => {
  try {
    const response = await tmdb.get("/movie/popular");
    console.log("Popular movies response:", response.data);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
