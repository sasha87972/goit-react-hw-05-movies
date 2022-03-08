import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchMovies } from "../../services/moviesApi";
import SearchForm from "../searchForm";
import MoviesList from "../moviesList";
export default function SearchResult() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchQuery = location.search;
  const navigate = useNavigate();
  const submitForm = (search) => {
    navigate({ ...location, search: `&query=${search}` });
  };
  useEffect(() => {
    if (searchQuery === "") {
      setMovies([]);
      return;
    }
    searchMovies(searchQuery).then((result) => {
      setMovies(result.results);
    });
  }, [searchQuery, location]);
  return (
    <>
      {movies.length !== 0 || <SearchForm onSubmit={submitForm} />}
      {movies && <MoviesList items={movies} url={"/movies"} />}
    </>
  );
}
