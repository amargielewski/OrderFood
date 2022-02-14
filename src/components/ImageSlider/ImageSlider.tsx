import { useState } from "react";
import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RightArrowIcon } from "../../icons/RightArrowIcon";
import { Images, ImagesDatum } from "../../types/restaurant";

import {
  StyledWrapper,
  StyledLeftButton,
  StyledRightButton,
  StyledImage,
  StyledImageWrapper,
} from "./ImageSlider.styled";

export type ImageSliderProps = {
  images: ImagesDatum[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState<number>(0);
  const length = images.length;

  if (!Array.isArray(images) || length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <StyledWrapper>
      {length !== 1 && (
        <StyledLeftButton onClick={prevSlide}>
          <LeftArrowIcon />
        </StyledLeftButton>
      )}
      {images.map((slide, index) => {
        return (
          index === current && (
            <StyledImageWrapper key={slide.id}>
              <StyledImage
                src={"http://192.168.1.12:1337" + slide.attributes.url}
                alt={slide.attributes.caption}
              />
            </StyledImageWrapper>
          )
        );
      })}
      {length !== 1 && (
        <StyledRightButton onClick={nextSlide}>
          <RightArrowIcon />
        </StyledRightButton>
      )}
    </StyledWrapper>
  );
};
