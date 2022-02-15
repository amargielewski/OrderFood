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
}: RestaurantAttributes) => {
  const [displayHours, setDisplayHours] = useState(false);

  
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
      {menu.map((item) => {
        return (
          <div key={item.id}>
            {item.name}-{item.price}
          </div>
        );
      })}
    </StyledWrapper>
  );
};
