import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavMenu = styled.nav`
  display: flex;
  padding: 20px;
  border-bottom: 2px solid grey;
`;

const MenuLink = styled(NavLink)`
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
export { NavMenu, MenuLink };
