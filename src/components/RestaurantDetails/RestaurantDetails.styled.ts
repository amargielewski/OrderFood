import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #fafafa;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px 0;
  padding: 15px;
  margin-bottom: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  align-items: center;
  padding-bottom: 20px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
`;

export const StyledTitleRatingContainer = styled.div`
  margin-top: 20;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px 0;
  font-size: 25px;

  @media (max-width: 600px) {
    margin-top: 40px;
  } ;
`;

export const StyledTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const StyledLocalizationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const StyledCityText = styled.p`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledAddressText = styled.p`
  text-transform: capitalize;
`;

export const StyledRegionText = styled.p`
  text-transform: capitalize;
`;

export const StyledOpenHoursButton = styled.div`
  display: flex;
  gap: 0 20px;
  font-size: 20px;
  color: #fc4f4f;
  max-width: max-content;
  border: 1px solid #fc4f4f;
  padding: 10px 50px;
  background-color: #fafafa;
  border-radius: 8px;
  transition: 0.5s;

  :hover {
    background-color: #fc4f4f;
    color: #fafafa;
  }
`;

export const StyledOpenHoursButtonText = styled.p`
  font-weight: 500;
`;

export const StyledOpenHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #fc4f4f;
  z-index: 1;
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

export const StyledSingleTimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const StyledDayText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const StyledMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  margin-bottom: 50px;
`;

export const StyledMenuCategoryTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #fc4f4f;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #fc4f4f;
`;

export const StyledMenuCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
`;

export const StyledMenuCategoryItemList = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 25px 0;
`;

export const StyledTypeText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #fafafa;
  padding: 10px 30px;
  border-top-left-radius: 20px;
  background-color: #fc4f4f;
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: 600px) {
    width: 100%;
    border-top-right-radius: 20px;
    text-align: center;
  }
`;
