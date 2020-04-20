import { useState, useRef } from 'react';

// ignore scrolling it's kinda broken
const getScroll = (index, maxWidth = 325, elWidth = 145) => {
  const diff = maxWidth - (index + 1) * elWidth;
  if (diff < 0) {
    return Math.abs(diff);
  }
  return 0;
};

export const useImageGallery = defaultImages => {
  // scroll logic not finished
  const [images] = useState(defaultImages);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const containerRef = useRef();

  const handleScroll = offset => {
    if (containerRef && containerRef.current) {
      containerRef.current.scroll(0, offset);
    }
  };

  const nextImage = () => {
    const index = images.findIndex(img => img.resourceId === selectedImage.resourceId);
    if (index + 1 > images.length - 1) {
      handleScroll(0);
      return setSelectedImage(images[0]);
    }
    handleScroll(getScroll(index));
    return setSelectedImage(images[index + 1]);
  };

  const prevImage = () => {
    const index = images.findIndex(img => img.resourceId === selectedImage.resourceId);
    if (index < 1) {
      return setSelectedImage(images[images.length - 1]);
    }
    return setSelectedImage(images[index - 1]);
  };

  return {
    selectedImage,
    selectImage: setSelectedImage,
    nextImage,
    prevImage,
  };
};
