import React from 'react';
import { Container, Button, Image, ImageList } from './styles';

import { ReactComponent as ChevronLeft } from '../../assets/chevron-left.svg';
import { ReactComponent as ChveronRight } from '../../assets/chevron-right.svg';

const GalleryNav = ({ images, selectedImage, selectImage, prevImage, nextImage }) => {
  return (
    <Container>
      <Button onClick={() => prevImage()}>
        <ChevronLeft />
      </Button>
      <div style={{ width: 'calc(100% - 48px)', position: 'relative', height: 111 }}>
        <ImageList>
          {images.map(img => (
            <Image
              onClick={() => selectImage(img)}
              selected={selectedImage.resourceId === img.resourceId}
              key={img.resourceId}
              src={img.thumbnail}
            />
          ))}
        </ImageList>
      </div>
      <Button onClick={() => nextImage()}>
        <ChveronRight />
      </Button>
    </Container>
  );
};

export default GalleryNav;
