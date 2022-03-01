import PropTypes from "prop-types";
import { Wrapper } from "./cast.styled";
export default function ShowCast({ credits }) {
  return (
    <Wrapper>
      <ul>
        {credits.map((c) => (
          <li key={c.id}>
            <img
              src={
                c.profile_path &&
                `https://image.tmdb.org/t/p/w200/${c.profile_path}`
              }
              alt={c.original_name}
            />
            <p>{c.original_name}</p>
            <p>{c.character}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
ShowCast.propTypes = {
  credits: PropTypes.array.isRequired,
};
