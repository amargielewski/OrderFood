import styled, { keyframes } from "styled-components";

const drivingCar = keyframes`
0% {
    transform: translateX(-200px);
    opacity:0.1;
}


100% {
    transform: translateX(0);
}

`;

export const StyledMainWrapper = styled.div`
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    background: #e0afa0;
    height: 1px;
    bottom: 0;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledSiteLogo = styled.h2`
  margin-left: 10px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
`;

export const StyledIconWrapper = styled.div`
  font-size: 40px;
  animation: ${drivingCar} 1.5s ease;
`;

export const StyledNavbarListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;
`;

export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 100%;
  gap: 0 5px;
  font-size: 20px;

  :hover {
    background-color: #fa7a52;
    transition: 0.5s;
    border-radius: 10px;
    color: white;
    transform: translateY(5px);
  }
`;
export const StyledListItemText = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`;
