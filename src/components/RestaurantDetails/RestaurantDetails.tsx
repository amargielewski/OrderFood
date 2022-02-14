import { Rating } from "react-simple-star-rating";
import { StarIcon } from "../../icons/StarIcon";
import { RestaurantDetailsTypes } from "../../types/restaurantDetails";
import {
  StyledAddressText,
  StyledCityText,
  StyledDayText,
  StyledInfoContainer,
  StyledLocalizationContainer,
  StyledMenuCategoryContainer,
  StyledMenuContainer,
  StyledMenuItemName,
  StyledMenuItemPrice,
  StyledMenuName,
  StyledOpenHoursContainer,
  StyledRegionText,
  StyledSingleMenuListItemBox,
  StyledSingleTimeBox,
  StyledTimeBox,
  StyledTimeText,
  StyledTitle,
  StyledTitleRatingContainer,
  StyledWrapper,
  StyledImage,
} from "./RestaurantDetails.styled";

export const RestaurantDetails = ({
  name,
  localization,
  starRating,
  openHours,
  menu,
  image,
}: RestaurantDetailsTypes) => {
  return (
    <StyledWrapper>
      <StyledInfoContainer>
        <StyledTitleRatingContainer>
          <StyledTitle>{name}</StyledTitle>
          <Rating
            ratingValue={starRating * 20}
            emptyIcon={<StarIcon color="lighray" />}
            fullIcon={<StarIcon color="#ffbc0b" />}
            allowHalfIcon
            readonly
          />
          <StyledImage src={image.url} alt={image.alt} />
        </StyledTitleRatingContainer>
        <StyledLocalizationContainer>
          <StyledCityText>{localization.city}</StyledCityText>
          <StyledAddressText>{localization.address}</StyledAddressText>
          <StyledRegionText>{localization.region}</StyledRegionText>
        </StyledLocalizationContainer>
        <StyledOpenHoursContainer>
          {openHours &&
            openHours.map(({ name, open, close }) => (
              <StyledSingleTimeBox key={name}>
                <StyledDayText>{name}:</StyledDayText>
                <StyledTimeBox>
                  <StyledTimeText>{open}</StyledTimeText>
                  <StyledTimeText>{close}</StyledTimeText>
                </StyledTimeBox>
              </StyledSingleTimeBox>
            ))}
        </StyledOpenHoursContainer>
      </StyledInfoContainer>
      <StyledMenuContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuName>Food</StyledMenuName>
          {menu.food.map(({ name, price }) => (
            <StyledSingleMenuListItemBox key={name}>
              <StyledMenuItemName>{name}</StyledMenuItemName>
              <StyledMenuItemPrice>{price} zł</StyledMenuItemPrice>
            </StyledSingleMenuListItemBox>
          ))}
        </StyledMenuCategoryContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuName>Drinks</StyledMenuName>

          {menu.drinks.map(({ name, price }) => (
            <StyledSingleMenuListItemBox key={name}>
              <StyledMenuItemName>{name}</StyledMenuItemName>
              <StyledMenuItemPrice>{price} zł</StyledMenuItemPrice>
            </StyledSingleMenuListItemBox>
          ))}
        </StyledMenuCategoryContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuName>Sauce</StyledMenuName>
          {menu.sauce.map(({ name, price }) => (
            <StyledSingleMenuListItemBox key={name}>
              <StyledMenuItemName>{name}</StyledMenuItemName>
              <StyledMenuItemPrice>{price} zł</StyledMenuItemPrice>
            </StyledSingleMenuListItemBox>
          ))}
        </StyledMenuCategoryContainer>
      </StyledMenuContainer>
    </StyledWrapper>
  );
};
