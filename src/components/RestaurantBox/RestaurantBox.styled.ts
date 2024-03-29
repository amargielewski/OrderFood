import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 650px;
  background: #fafafa;
  padding: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 1400px) {
    max-width: 600px;
  }

  @media (max-width: 1280px) {
    max-width: 800px;
    width: 100%;
  }
`;

export const StyledContentContainer = styled.div`
  display: flex;
  gap: 0 50px;
`;

export const StyledRatingWrapper = styled.div`
  font-size: 35px;
`;

export const StyledImageRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px 0;
`;

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StyledName = styled.p`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 600;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const StyledCategory = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  background-color: #fc4f4f;
  color: #fafafa;
  width: 100%;
  text-align: center;
  padding: 5px 0;
  border-radius: 10px;
`;

export const StyledLocalizationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const StyledCityText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;
export const StyledAddressText = styled.p`
  text-transform: capitalize;
  font-size: 18px;
`;
export const StyledRegionText = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 300;
`;

export const StyledMenuLink = styled(Link)`
  background-color: transparent;
  color: #fc4f4f;
  border: 1px solid #fc4f4f;
  padding: 5px 0;
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  transition: 0.6s;
  :hover {
    background-color: #fc4f4f;
    color: #fafafa;
  }
`;

export const StyledOpenHourButton = styled.div`
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  max-width: max-content;
  padding: 5px 10px;
  gap: 0 10px;
  border: 1px solid #fc4f4f;
  border-radius: 8px;
  color: #fc4f4f;
  background-color: #fafafa;

  transition: 0.5s;
  :hover {
    background-color: #fc4f4f;
    color: #fafafa;
  }
`;

export const StyledOpenHourButtonText = styled.p`
  font-weight: 500;
`;

export const StyledOpenHourContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  position: relative;
`;

export const StyledOpenHoursBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  position: absolute;
  background-color: #fafafa;

  padding: 10px;
  border-radius: 8px;
  border: 1px solid #fc4f4f;
  bottom: -170px;
`;

export const StyledSingleHourBox = styled.div`
  display: flex;
  align-items: center;

  gap: 0 10px;
`;

export const StyledSingleHourDayText = styled.p`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  min-width: 100px;
`;
export const StyledSingleHour = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
