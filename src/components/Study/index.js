import React from 'react';
import { Container, Thumbnail, Name, Info, Status, Icon, Divider } from './styles';
import { ReactComponent as ChevronRight } from '../../assets/chevron-right.svg';
import { useGoToStudyDetails } from '../../hooks/navigation';

const Study = ({ study, divider = true }) => {
  const goToDetails = useGoToStudyDetails(study.id);
  return (
    <>
      <Container onClick={() => goToDetails()}>
        <Thumbnail src={study.img} />
        <Info>
          <Name>{study.name}</Name>
          <Status>{study.statusKey}</Status>
        </Info>
        <Icon>
          <ChevronRight />
        </Icon>
      </Container>
      {divider && <Divider />}
    </>
  );
};

export default Study;
