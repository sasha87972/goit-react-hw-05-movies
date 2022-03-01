import { useState } from "react";
import PropTypes from "prop-types";
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from "./searchForm.styled";

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleChange}
      />
      <SearchFormBtn type="submit">Search</SearchFormBtn>
    </SearchForm>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
