import { List, StyledLink } from "./moviesList.styled";
import { useLocation } from "react-router";
import PropTypes from "prop-types";
export default function MoviesList({ items, url }) {
  const location = useLocation();
  return (
    <List>
      {items.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <StyledLink to={`${url}/${id}`} state={{ prevUrl: location }}>
              {original_title}
            </StyledLink>
          </li>
        );
      })}
    </List>
  );
}
MoviesList.propTypes = {
  items: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};
