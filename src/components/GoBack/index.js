import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ButtonContainer, Button } from './styles';

const GoBack = () => {
  const history = useHistory();
  return (
    <ButtonContainer>
      <Button onClick={() => history.goBack()}>
        <ChevronLeft />
        {`Go Back`}
      </Button>
    </ButtonContainer>
  );
};

export default GoBack;
