import { useState } from "react";

import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RightArrowIcon } from "../../icons/RightArrowIcon";

import {
  StyledWrapper,
  StyledLeftButton,
  StyledRightButton,
  StyledImage,
} from "./ImageSlider.styled";

type Image = {
  url: string;
  alt?: string;
};

export type ImageSliderProps = {
  images: Image[];
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
      <StyledImage src={images[current].url} />
      {length !== 1 && (
        <StyledRightButton onClick={nextSlide}>
          <RightArrowIcon />
        </StyledRightButton>
      )}
    </StyledWrapper>
  );
};
