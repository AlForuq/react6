import React, { useRef } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onSave = () => {
    if (refU.current.value === "web" && refP.current.value === "1234") {
      localStorage.setItem("token", true);
      navigate("/Info");
    } else {
      localStorage.setItem("token", false);
      alert("Incorrect");
      refP.current.value = "";
      refU.current.value = "";
    }
  };

  const refP = useRef();
  const refU = useRef();
  return (
    <Container>
      <h1>Login</h1>

      <input ref={refU} placeholder="username" type="text" />
      <input ref={refP} placeholder="password" type="text" />
      <button onClick={onSave}>onSave</button>
    </Container>
  );
};
