import React from "react";
import { Container, LinkComp } from "./style";
import { Outlet, useLocation, NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const onStyle = (l) => {
    return location.pathname === l ? "active" : "inactive";
  };
  return (
    <>
      <Container>
        <LinkComp active={onStyle("/")} to={"/"}>
          Logo 6{" "}
        </LinkComp>
        <LinkComp active={onStyle("/Home")} to={"/Home"}>
          Home
        </LinkComp>
        <LinkComp active={onStyle("/About")} to={"/About"}>
          About
        </LinkComp>
        <LinkComp active={onStyle("/Contact")} to={"/Contact"}>
          Contact
        </LinkComp>
        <LinkComp active={onStyle("/Contact/plus")} to={"/Contact/plus"}>
          Contact++
        </LinkComp>
        <LinkComp active={onStyle("/Info")} to={"/Info"}>
          Info
        </LinkComp>
        <LinkComp active={onStyle("/Login")} to={"/Login"}>
          Login
        </LinkComp>
      </Container>
      <Outlet />
    </>
  );
};
