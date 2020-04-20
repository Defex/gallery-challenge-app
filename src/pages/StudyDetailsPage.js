import React from 'react';
import Details from '../components/Details';
import { useGetStudyDetails } from '../hooks/dataFetching';

const StudyDetails = () => {
  const { loading, data, meta } = useGetStudyDetails();
  return (
    <>
      {loading && !data && 'Loading'}
      {!loading && !!data && <Details data={data} meta={meta} />}
    </>
  );
};

export default StudyDetails;
