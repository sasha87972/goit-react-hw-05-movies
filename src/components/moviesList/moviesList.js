import { List, StyledLink } from "./moviesList.styled";
import PropTypes from "prop-types";
export default function MoviesList({ items, url }) {
  return (
    <List>
      {items.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <StyledLink to={`${url}/${id}`}>{original_title}</StyledLink>
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
