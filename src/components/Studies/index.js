import React from 'react';
import { Container } from './styles';
import StudyList from '../StudyList';
import Filters from '../Filters';
import Search from '../Search';
import { useQueriedSearch } from '../../hooks/searchAndFiltering';

const Studies = ({ studies }) => {
  const { filteredItems, filters, activeFilter, setActiveFilter, searchValue, setSearchValue } = useQueriedSearch(
    studies,
  );
  return (
    <Container>
      <Filters filters={filters} selected={activeFilter} onChange={setActiveFilter} />
      <Search value={searchValue} onChange={setSearchValue} />
      <StudyList studies={filteredItems} />
    </Container>
  );
};

export default Studies;
