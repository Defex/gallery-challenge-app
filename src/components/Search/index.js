import React from 'react';
import { SearchContainer, Input, Text, InputContainer } from './styles';

const Search = ({ value, onChange }) => (
  <SearchContainer>
    <Text>{`Search: `}</Text>
    <InputContainer>
      <Input value={value} placeholder={`f.e: Study`} onChange={e => onChange(e.target.value)} />
    </InputContainer>
  </SearchContainer>
);

export default Search;
