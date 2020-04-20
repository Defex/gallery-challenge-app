import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-transform: uppercase;
  font-size: 16px;
  width: 24px;
`;

export const ImageList = styled.div`
  max-height: 650px;
  max-width: 111px;
  overflow-y: auto;
  overflow-x: hidden;
  ${props =>
    props.transformOffset
      ? css`
          transform: rotate(-90deg) translateY(${props.transformOffset});
        `
      : css`
          transform: rotate(-90deg) translateY(-111px);
        `}
  transform-origin: right top;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  min-width: 75px;
  max-width: 75px;
  min-height: 75px;
  max-height: 75px;
  margin: 16px;
  transform: rotate(90deg);
  display: block;
  background-color: #a8a8df;
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      border: 4px solid green;
    `}
`;

export const GalleryNav = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
