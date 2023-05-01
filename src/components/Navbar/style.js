import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 44px;
  background-color: #555;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

export const LinkComp = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  color: ${({ active }) => (active === "active" ? "red" : "white")};
`;
