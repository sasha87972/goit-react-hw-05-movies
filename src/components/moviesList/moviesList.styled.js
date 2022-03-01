import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  list-style: none;
  font=size: 20px;
  line-height: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export { List, StyledLink };
