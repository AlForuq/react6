import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { s } from "../../mock";

import { useNavigate, useParams } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [students] = useState(s);
  const [selected, setSelected] = useState({});

  const params = useParams();
  // const loc = new URLSearchParams();

  useEffect(() => {
    let res = students.filter((v) => v.id === Number(params.id));
    setSelected(...res);
    // eslint-disable-next-line
  }, [params?.id]);

  return (
    <Container>
      <div>
        {students.map((v) => {
          return (
            <div key={v.id}>
              <h3>Name: {v.name}</h3>
              <h3>Email: {v.email}</h3>
              <button onClick={() => navigate(`/Home/${v.id}`)}>Click</button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Selected: {selected?.email}</h1>
      </div>
    </Container>
  );
};
