import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: -5px;
    background: lightgray;
  }
`;

export const StyledText = css`
  font-size: ${({ theme }) => theme.fontSize.m}px;
`;

export const StyledItemName = styled.p`
  ${StyledText}
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const StyledItemPrice = styled.p`
  ${StyledText}
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
