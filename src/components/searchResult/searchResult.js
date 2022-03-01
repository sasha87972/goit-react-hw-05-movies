import { useState, useEffect } from "react";
import { searchMovies } from "../../services/moviesApi";
import SearchForm from "../searchForm";
import MoviesList from "../moviesList";
export default function SearchResult() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const submitForm = (searchWord) => {
    setSearchQuery(searchWord);
  };
  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    searchMovies(searchQuery).then((result) => {
      setMovies(result.results);
    });
  }, [searchQuery]);
  return (
    <>
      {movies.length !== 0 || <SearchForm onSubmit={submitForm} />}
      {movies && <MoviesList items={movies} url="/movies" />}
    </>
  );
}
