import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;
  height: 200px;

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
  .slide-exit {
    opacity: 1;
  }
  .slide-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }
`;

export const defaulutArrowButton = css`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  font-size: 24px;
  width: 40px;
  height: 40px;
  background: #fc4f4f80;
  color: white;
  border-radius: 50%;
  transition: 0.23s ease-in;
  z-index: 1;
  :hover {
    background: #fc4f4f;
  }
`;

export const StyledLeftButton = styled.button`
  ${defaulutArrowButton};
  left: 10px;
`;
export const StyledRightButton = styled.button`
  ${defaulutArrowButton};
  right: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  position: absolute;
  top: 0;
`;
