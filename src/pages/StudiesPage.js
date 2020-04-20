import React from 'react';
import Studies from '../components/Studies';
import { useGetStudiesList } from '../hooks/dataFetching';

const StudiesPage = () => {
  const studies = useGetStudiesList();
  return (
    <>
      {!studies.data && <div>Loading</div>}
      {studies.data && <Studies studies={studies.data} />}
    </>
  );
};

export default StudiesPage;
