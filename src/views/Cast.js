import { getMovieCredits } from "../services/moviesApi";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ShowCast from "../components/cast";
export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(
    () => getMovieCredits(movieId).then((result) => setCredits(result.cast)),
    [movieId]
  );
  return credits && <ShowCast credits={credits} />;
}
