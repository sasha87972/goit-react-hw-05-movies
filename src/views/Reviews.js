import { useState, useEffect } from "react";
import { getMovieReviews } from "../services/moviesApi";
import { useParams } from "react-router-dom";
import ShowReviews from "../components/reviews";

export default function Rewiev() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews && <ShowReviews review={reviews} />;
}
