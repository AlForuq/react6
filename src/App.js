import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { ContactPlus } from "./components/ContactPlus";

import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";

const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // console.log(token, typeof token);
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="/Home" />} />

          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Home/:id"} element={<Home />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/Contact/plus"} element={<ContactPlus />} />
          <Route path={"/About"} element={<About />} />
          <Route
            path={"/Info"}
            element={token ? <Info /> : <Navigate to="/Login" />}
          /> 
          <Route path={"/Login"} element={<Login />} />

          <Route path={"*"} element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
        <>
          <button onClick={() => navigate(1)}>ForWard</button>
          <button onClick={() => navigate(-1)}>BackWard</button>
        </>
    </div>
  );
};

export default App;
