import { NavMenu, MenuLink } from "./Navigation.styled";
import { Outlet } from "react-router";

export default function Navigation() {
  return (
    <>
      <NavMenu>
        <MenuLink to="/">Home </MenuLink>
        <MenuLink to="movies">Movies</MenuLink>
      </NavMenu>
      <Outlet />
    </>
  );
}
