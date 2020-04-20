import React from 'react';

import { Container, StudyName, StudyStatusKey, StudyHeader, StudyImages } from './styles';
import GoBack from '../GoBack';
import GalleryImage from '../GalleryImage';
import GalleryNav from '../GalleryNav';
import { useImageGallery } from '../../hooks/gallery';

const Details = ({ data, meta }) => {
  const { selectedImage, selectImage, prevImage, nextImage } = useImageGallery(data);
  return (
    <Container>
      <GoBack />
      <StudyHeader>
        <StudyName>{meta.study.name}</StudyName>
        <StudyStatusKey>{`Status: ${meta.study.statusKey}`}</StudyStatusKey>
      </StudyHeader>
      <StudyImages>
        <GalleryImage
          src={selectedImage.original}
          title={selectedImage.name}
          description={`STATUS: ${selectedImage.statusKey}`}
        />
      </StudyImages>
      <StudyImages>
        <GalleryNav
          images={data}
          selectImage={selectImage}
          selectedImage={selectedImage}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      </StudyImages>
    </Container>
  );
};

export default Details;
