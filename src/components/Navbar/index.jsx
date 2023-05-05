import React from "react";
import { Container, LinkComp } from "./style";
import {
  Outlet,
  useLocation,
  NavLink,
  Link,
  useNavigate,
} from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const onStyle = (l) => {
    return location.pathname === l ? "Active" : "";
  };
  return (
    <>
      <Container>
        <LinkComp actv={onStyle("/")} to={"/"}>
          Logo 6{" "}
        </LinkComp>
        <LinkComp actv={onStyle("/Home")} to={"/Home"}>
          Home
        </LinkComp>
        <LinkComp actv={onStyle("/About")} to={"/About"}>
          About
        </LinkComp>
        <LinkComp actv={onStyle("/Contact")} to={"/Contact"}>
          Contact
        </LinkComp>
        <LinkComp actv={onStyle("/Contact/plus")} to={"/Contact/plus"}>
          Contact++
        </LinkComp>
        <LinkComp actv={onStyle("/Info")} to={"/Info"}>
          Info
        </LinkComp>
        <LinkComp actv={onStyle("/Login")} to={"/Login"}>
          Login
        </LinkComp>
      </Container>
      <Outlet />
    </>
  );
};
