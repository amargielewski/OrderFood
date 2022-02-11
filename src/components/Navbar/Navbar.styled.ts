import styled, { css, keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const drivingCar = keyframes`
0% {
    transform: translateX(-200px);
    opacity:0.1;
}


100% {
    transform: translateX(0);
}

`;

const spin = keyframes`
        from {
				transform: rotate(0deg);
		}
		to {
				transform: rotate(359deg);
		}

`;

export const SpinAnimation = css`
  animation: ${spin} 2s infinite linear;
`;

export const StyledMainWrapper = styled.div`
  position: relative;
  ::after {
    position: absolute;
    content: "";
    width: 100%;
    background: #fa7a52;
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
  margin-bottom: 50px;
`;

export const StyledSiteLogo = styled.h2`
  margin-left: 10px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const StyledLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
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

export const StyledListItem = styled(NavLink)<{
  rotation?: 0;
}>`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  height: 100%;
  gap: 0 5px;
  font-size: 20px;
  transition: 0.2s ease-in;

  :hover {
    background-color: #fa7a52b3;
    border-radius: 10px;
    color: white;
    transform: translateY(5px);

    svg {
      ${({ rotation }) => rotation === 0 && SpinAnimation}
    }
  }

  &.active {
    background-color: #fa7a52;
    border-radius: 10px;
    color: white;
  }
`;

export const StyledListItemText = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`;
