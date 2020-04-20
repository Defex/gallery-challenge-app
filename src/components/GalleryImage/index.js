import React from 'react';
import { Container, Image, Title, Description } from './styles';

const GalleryImage = ({ src, title, description }) => {
  return (
    <Container>
      <Image src={src} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default GalleryImage;
