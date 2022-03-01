import PropTypes from "prop-types";
import { Wrapper } from "./reviews.styled";
export default function ShowReviews({ review }) {
  return review.results.length !== 0 ? (
    <Wrapper>
      <ul>
        {review.results.map((r) => (
          <li key={r.id}>
            <h2>author:</h2>
            <p>{r.author}</p>
            <h2>content:</h2>
            <p>{r.content}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  ) : (
    <h2> We don't have any rewievs for this movie</h2>
  );
}
ShowReviews.propTypes = {
  review: PropTypes.object,
};
