import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 44px;
  background-color: #555;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .active {
    /* color: yellow; */
  }
`;

export const LinkComp = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  color: white;
  :active {
    color: blue;
  }
  color: ${({ actv }) => (actv === "Active" ? "red" : "white")};
`;
