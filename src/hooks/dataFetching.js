import { useReducer, useEffect, useState, useCallback } from 'react';
import { getList, getDetails } from '../requests';
import { studyListReducer, initialStudiesState, studyListActionTypes } from '../reducers/studyListDuck';
import { useParams } from 'react-router-dom';

export const useGetStudiesList = () => {
  const [studies, dispatch] = useReducer(studyListReducer, initialStudiesState);

  const getStudyList = async () => {
    dispatch({ type: studyListActionTypes.get });
    const data = await getList();
    dispatch({ type: studyListActionTypes.set, payload: { data } });
  };

  useEffect(() => {
    if (!studies.data && !studies.isFetching) {
      getStudyList();
    }
  }, [studies]);

  return studies;
};

export const useGetStudyDetails = () => {
  const { studyId } = useParams();
  const [studyDetails, setStudyDetails] = useState({
    data: null,
    meta: null,
    loading: false,
  });

  const getStudyDetails = useCallback(async () => {
    setStudyDetails(details => ({ ...details, loading: true }));
    const { data, meta } = await getDetails(studyId);
    setStudyDetails(details => ({ ...details, data, meta, loading: false }));
  }, [setStudyDetails, studyId]);

  useEffect(() => {
    if (!studyDetails.data && !studyDetails.loading) {
      getStudyDetails();
    }
  }, [studyDetails, getStudyDetails]);

  return studyDetails;
};
