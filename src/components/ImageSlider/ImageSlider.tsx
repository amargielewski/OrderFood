import { useState } from "react";
import { LeftArrowIcon } from "../../icons/LeftArrowIcon";
import { RightArrowIcon } from "../../icons/RightArrowIcon";
import { ImagesDatum } from "../../types/restaurant";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  StyledWrapper,
  StyledLeftButton,
  StyledRightButton,
  StyledImage,
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
      <TransitionGroup>
        <CSSTransition
          key={"http://192.168.1.12:1337" + images[current].attributes.url}
          timeout={500}
          classNames="slide"
        >
          <StyledImage
            src={"http://192.168.1.12:1337" + images[current].attributes.url}
            alt="travel"
          />
        </CSSTransition>
      </TransitionGroup>
      {length !== 1 && (
        <StyledRightButton onClick={nextSlide}>
          <RightArrowIcon />
        </StyledRightButton>
      )}
    </StyledWrapper>
  );
};
