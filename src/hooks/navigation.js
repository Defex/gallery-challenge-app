import { useHistory } from 'react-router-dom';

export const useGoToStudyDetails = studyId => {
  const history = useHistory();
  const goToStudyDetails = () => history.push(`/studies/${studyId}/details`);
  return goToStudyDetails;
};
