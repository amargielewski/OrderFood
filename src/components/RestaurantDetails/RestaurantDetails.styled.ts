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
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  align-items: center;
`;

export const StyledTitleRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  font-size: 25px;
`;

export const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
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

export const StyledOpenHoursContainer = styled.div`
  display: flex;
  gap: 0 20px;
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
export const StyledTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  align-items: center;
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    background-color: #fc4f4f;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledTimeText = styled.p`
  font-size: 16px;
`;

export const StyledMenuTitle = styled.p`
  font-size: 24px;
  color: #fc4f4f;
  font-weight: 500;
`;

export const StyledMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  margin-bottom: 50px;
`;

export const StyledMenuName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fc4f4f;
  border: 1px solid #fc4f4f;
  padding: 5px 10px;
  border-radius: 8px;
`;

export const StyledMenuCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px 0;
`;
export const StyledDrinksContainer = styled.div``;
export const StyledSausaceContainer = styled.div``;

export const StyledSingleMenuListItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    background-color: lightgray;
    height: 1px;
    bottom: -5px;
  }
`;

export const StyledMenuItemName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const StyledMenuItemPrice = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const StyledImage = styled.img`
  width: 400px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
