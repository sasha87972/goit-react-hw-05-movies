import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  LinkWrapper,
  Inner,
  Image,
  Button,
  StyledLink,
} from "./movieCard.styled";
export default function MovieCard({ item }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [getPrevUrl] = useState(() => {
    return location;
  });
  const { pathname, search } = getPrevUrl.state.prevUrl;
  const prevPage = () => {
    if (getPrevUrl.state === null) {
      navigate("/");
    } else {
      navigate(pathname + search ?? "/");
    }
  };
  return (
    <>
      <Wrapper>
        <Inner>
          <Button type="button" onClick={prevPage}>
            Go back
          </Button>
          <Image
            src={
              item.poster_path &&
              `https://image.tmdb.org/t/p/w300${item.poster_path}`
            }
            alt={item.title}
          />
        </Inner>
        <div>
          <h1>
            {item.title} ({new Date(item.release_date).getFullYear()})
          </h1>
          <span>User Score: {`${item.vote_average * 10}%`}</span>
          <h2>Overview</h2>
          <span>{item.overview}</span>
          <h2>Genres</h2>
          <p>
            {item.genres &&
              item.genres.map((g) => <span key={g.id}>{g.name} </span>)}
          </p>
        </div>
      </Wrapper>
      <LinkWrapper>
        <h2>Additional information</h2>
        <StyledLink to={`cast`} replace="true">
          Cast
        </StyledLink>
        <br />
        <StyledLink to={`reviews`} replace="true">
          Reviews
        </StyledLink>
      </LinkWrapper>
      <Outlet />
    </>
  );
}
MovieCard.propTypes = {
  item: PropTypes.object,
};
