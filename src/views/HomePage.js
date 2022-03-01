import { getTrend } from "../services/moviesApi";
import { useEffect, useState } from "react";
import MoviesList from "../components/moviesList";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(
    () => getTrend().then((trendMovies) => setMovies(trendMovies.results)),
    []
  );
  return movies && <MoviesList items={movies} url="movies" />;
}
