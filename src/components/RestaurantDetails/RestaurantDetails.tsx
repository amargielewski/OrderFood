import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { ClockIcon } from "../../icons/ClockIcon";
import { StarIcon } from "../../icons/StarIcon";
import { Menu, RestaurantAttributes } from "../../types/restaurantDetails";
import {
  StyledAddressText,
  StyledCityText,
  StyledInfoContainer,
  StyledLocalizationContainer,
  StyledOpenHoursContainer,
  StyledRegionText,
  StyledTitle,
  StyledTitleRatingContainer,
  StyledWrapper,
  StyledImage,
  StyledOpenHoursButton,
  StyledSingleHourBox,
  StyledSingleHourDayText,
  StyledSingleHour,
  StyledOpenHoursBox,
  StyledOpenHoursButtonText,
  StyledMenuContainer,
  StyledMenuCategoryTitle,
  StyledMenuCategoryContainer,
  StyledSingleMenuItem,
  StyledSingleItemName,
  StyledSingleItemPrice,
  StyledMenuCategoryItemList,
  StyledTypeText,
} from "./RestaurantDetails.styled";

const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thurdsay",
  "friday",
  "saturday",
  "sunday",
];

const getHours = (obj: any) => {
  return weekDays.map((weekDay) => (
    <StyledSingleHourBox key={weekDay}>
      <StyledSingleHourDayText>{weekDay}:</StyledSingleHourDayText>
      <StyledSingleHour>{obj[weekDay]}</StyledSingleHour>
    </StyledSingleHourBox>
  ));
};

export const RestaurantDetails = ({
  name,
  localization,
  menu,
  rating,
  images,
  hours,
  type,
}: RestaurantAttributes) => {
  const [displayHours, setDisplayHours] = useState(false);

  const getCategories = (categoryName: string) => {
    return menu.filter(
      (menuItem) =>
        menuItem.category.toUpperCase() === categoryName.toUpperCase()
    );
  };

  return (
    <StyledWrapper>
      <StyledInfoContainer>
        <StyledTitleRatingContainer>
          <StyledTitle>{name}</StyledTitle>
          <StyledTypeText>{type.data.attributes.name}</StyledTypeText>
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

        <StyledOpenHoursContainer>
          <StyledOpenHoursButton
            onMouseEnter={() => setDisplayHours(true)}
            onMouseLeave={() => setDisplayHours(false)}
          >
            <StyledOpenHoursButtonText>Open Hours</StyledOpenHoursButtonText>
            <ClockIcon />
          </StyledOpenHoursButton>

          {displayHours && (
            <StyledOpenHoursBox>{getHours(hours)}</StyledOpenHoursBox>
          )}
        </StyledOpenHoursContainer>
      </StyledInfoContainer>
      <StyledMenuContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuCategoryTitle>Food</StyledMenuCategoryTitle>
          <StyledMenuCategoryItemList>
            {getCategories("food").map((item) => {
              return (
                <StyledSingleMenuItem key={item.id}>
                  <StyledSingleItemName>{item.name}</StyledSingleItemName>
                  <StyledSingleItemPrice>{item.price} zl</StyledSingleItemPrice>
                </StyledSingleMenuItem>
              );
            })}
          </StyledMenuCategoryItemList>
        </StyledMenuCategoryContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuCategoryTitle>Drinks</StyledMenuCategoryTitle>
          <StyledMenuCategoryItemList>
            {getCategories("drinks").map((item) => {
              return (
                <StyledSingleMenuItem key={item.id}>
                  <StyledSingleItemName>{item.name}</StyledSingleItemName>
                  <StyledSingleItemPrice>{item.price} zl</StyledSingleItemPrice>
                </StyledSingleMenuItem>
              );
            })}
          </StyledMenuCategoryItemList>
        </StyledMenuCategoryContainer>
        <StyledMenuCategoryContainer>
          <StyledMenuCategoryTitle>Sauces</StyledMenuCategoryTitle>
          <StyledMenuCategoryItemList>
            {getCategories("Sauces").map((item) => {
              return (
                <StyledSingleMenuItem key={item.id}>
                  <StyledSingleItemName>{item.name}</StyledSingleItemName>
                  <StyledSingleItemPrice>{item.price} zl</StyledSingleItemPrice>
                </StyledSingleMenuItem>
              );
            })}
          </StyledMenuCategoryItemList>
        </StyledMenuCategoryContainer>
      </StyledMenuContainer>
    </StyledWrapper>
  );
};
