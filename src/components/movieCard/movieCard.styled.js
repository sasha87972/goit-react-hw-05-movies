import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 2px solid black;
`;
const LinkWrapper = styled.div`
  padding: 15px;
  border-bottom: 2px solid black;
`;
const Inner = styled.div`
  margin-right: 20px;
`;
const Image = styled.img`
  width: 400px;
`;
const Button = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 20px;
`;
const StyledLink = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  color: black;
  &.active {
    color: red;
    }
  }
`;
export { Wrapper, LinkWrapper, Inner, Image, Button, StyledLink };
