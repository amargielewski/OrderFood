import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px 0;
`;

export const StyledNavigateButton = styled.button`
  align-self: flex-start;
  border: none;
  color: #fafafa;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #fa7a52;
  transition: 0.5s ease-in;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 10px;

  svg {
    transition: 0.5s ease-in;
    font-size: 20px;
  }
  :hover {
    background-color: #fa7a52b3;
    svg {
      transform: rotate(180deg);
    }
  }
`;
