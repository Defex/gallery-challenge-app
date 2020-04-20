import React from "react";
import { Container, Option, Select, Text } from "./styles";

const Filters = ({ filters, selected, onChange }) => {
  return (
    <Container>
      <Text>{`Status type:`}</Text>
      <Select value={selected} onChange={e => onChange(e.target.value)}>
        {filters.map(filter => (
          <Option key={filter}>{filter}</Option>
        ))}
      </Select>
    </Container>
  );
};

export default Filters;
