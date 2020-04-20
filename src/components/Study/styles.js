import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  padding: 8px;
  flex: 1;
  cursor: pointer;
`;

export const Divider = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: #0000001f;
  margin: 0 8px;
`;

export const Thumbnail = styled.img`
  width: 72px;
  min-width: 72px;
  height: 72px;
  min-height: 72px;
`;

export const Info = styled.div`
  padding-left: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
`;

export const Name = styled.h6`
  margin: 0;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  max-width: 150px;
  text-overflow: hidden;
  position: relative;
`;

export const Status = styled.span`
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: rgba(0, 0, 0, 0.54);
  justify-self: flex-end;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;
