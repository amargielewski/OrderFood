import { Rating } from "react-simple-star-rating";
import { StarIcon } from "../../icons/StarIcon";
import { RestaurantAttributes } from "../../types/restaurantDetails";
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
  menu,
  rating,
  images,
}: RestaurantAttributes) => {
  return (
    <StyledWrapper>
      <StyledInfoContainer>
        <StyledTitleRatingContainer>
          <StyledTitle>{name}</StyledTitle>
          <Rating
            ratingValue={rating * 20}
            emptyIcon={<StarIcon color="lighray" />}
            fullIcon={<StarIcon color="#ffbc0b" />}
            allowHalfIcon
            readonly
          />
          <StyledImage
            src={"http://192.168.1.12:1337" + images.data[0].attributes.url}
            alt={images.data[0].attributes.caption}
          />
        </StyledTitleRatingContainer>
        <StyledLocalizationContainer>
          <StyledCityText>{localization.city}</StyledCityText>
          <StyledAddressText>{localization.address}</StyledAddressText>
        </StyledLocalizationContainer>
        {/* <StyledOpenHoursContainer>
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
        </StyledOpenHoursContainer> */}
      </StyledInfoContainer>
      {/* <StyledMenuContainer>
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
      </StyledMenuContainer> */}
    </StyledWrapper>
  );
};
