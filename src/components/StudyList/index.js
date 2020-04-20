import React from "react";
import { Container } from "./styles";

import Study from "../Study";

const StudyList = ({ studies }) => {
  return (
    <Container>
      {studies.map((study, i) => (
        <Study key={study.id} study={study} divider={studies.length !== i + 1} />
      ))}
    </Container>
  );
};

export default StudyList;
