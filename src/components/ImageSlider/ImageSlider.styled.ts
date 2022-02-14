import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px;
  height: 200px;
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
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s;
`;

export const StyledImageWrapper = styled.div``;
