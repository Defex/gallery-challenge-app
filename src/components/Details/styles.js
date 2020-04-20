import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0 20%;
`;

export const StudyHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StudyName = styled.h4`
  margin: 0;
  font-size: 24px;
`;
export const StudyStatusKey = styled.h5`
  margin: 0;
  color: #0000008a;
  text-transform: uppercase;
  font-style: italic;
`;

export const StudyImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
