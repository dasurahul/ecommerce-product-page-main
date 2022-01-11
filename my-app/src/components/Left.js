import React, { useState } from "react";
import image from "../image-product-1.jpg";
import thumbnail1 from "../image-product-1-thumbnail.jpg";
import thumbnail2 from "../image-product-2-thumbnail.jpg";
import thumbnail3 from "../image-product-3-thumbnail.jpg";
import thumbnail4 from "../image-product-4-thumbnail.jpg";
import previous from "../icon-previous.svg";
import next from "../icon-next.svg";
import styled from "styled-components";

const Left = () => {
  const [showGallery, setShowGallery] = useState(false);
  const openGallery = () => {
    setShowGallery(true);
  };
  const closeGallery = () => {
    setShowGallery(false);
  };
  return (
    <LeftSection>
      <ProductImage src={image} alt="product" onClick={openGallery} />
      {showGallery && (
        <Background>
          <Gallery>
            <GalleryLargeImage src={image} alt="product" />
            <CloseButton onClick={closeGallery}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                />
              </svg>
            </CloseButton>
            <IconPrevious>
              <img src={previous} alt="previous" />
            </IconPrevious>
            <IconNext>
              <img src={next} alt="next" />
            </IconNext>
          </Gallery>
        </Background>
      )}
      <ImagesContainer>
        <ProductThumbnail src={thumbnail1} alt="thumbnail" />
        <ProductThumbnail src={thumbnail2} alt="thumbnail" />
        <ProductThumbnail src={thumbnail3} alt="thumbnail" />
        <ProductThumbnail src={thumbnail4} alt="thumbnail" />
      </ImagesContainer>
    </LeftSection>
  );
};

export default Left;

const LeftSection = styled.div`
  max-width: 20rem;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Gallery = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GalleryLargeImage = styled.img`
  width: 25rem;
  border-radius: 0.75rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  position: absolute;
  top: -2.5rem;
  right: 0;
  color: var(--white-color);

  &:hover {
    cursor: pointer;
  }
`;

const IconPrevious = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const IconNext = styled(IconPrevious)`
  right: 0;
  transform: translate(50%, -50%);
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductThumbnail = styled.img`
  width: 4rem;
  border-radius: 0.5rem;

  &:hover {
    opacity: 0.5;
  }
`;
