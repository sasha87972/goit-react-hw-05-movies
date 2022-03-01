import { getById } from "../services/moviesApi";
import { useParams } from "react-router";
import MovieCard from "../components/movieCard";
import { useEffect, useState } from "react";
export default function MovieDetailesPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(
    () => getById(movieId).then((result) => setMovie(result)),
    [movieId]
  );
  return movie && <MovieCard item={movie} />;
}
