import { Rating } from "react-simple-star-rating";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import {
  StyledWrapper,
  StyledRatingWrapper,
  StyledImageRatingContainer,
  StyledAboutContainer,
  StyledName,
  StyledDescription,
  StyledCategory,
  StyledLocalizationContainer,
  StyledCityText,
  StyledAddressText,
  StyledRegionText,
  StyledMenuLink,
  StyledContentContainer,
  StyledOpenHourButton,
  StyledOpenHourButtonText,
  StyledOpenHourContainer,
  StyledOpenHoursBox,
  StyledSingleHourBox,
  StyledSingleHourDayText,
  StyledSingleHour,
} from "./RestaurantBox.styled";
import { StarIcon } from "../../icons/StarIcon";
import { RestaurantTypes } from "../../types/restaurant";
import { ClockIcon } from "../../icons/ClockIcon";
import { useState } from "react";
import { StyledOpenHoursContainer } from "../RestaurantDetails/RestaurantDetails.styled";

type RestaurantBoxProps = { id: number } & RestaurantTypes;
const obj = {
  monday: "12.00 - 20.00",
  tuesday: "12.00 - 20.00",
  wednesday: "12.00 - 20.00",
  thurdsay: "12.00 - 20.00",
  friday: "12.00 - 20.00",
  saturday: "12.00 - 24.00",
  sunday: "12.00 - 24.00",
};

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

export const RestaurantBox = ({
  name,
  description,
  type,
  localization,
  rating,
  images,
  id,
  hours,
}: RestaurantBoxProps) => {
  const [displayHours, setDisplayHours] = useState(false);
  return (
    <StyledWrapper>
      <StyledContentContainer>
        <StyledImageRatingContainer>
          <StyledCategory>{type.data.attributes.name}</StyledCategory>

          <ImageSlider images={images.data} />
          <StyledRatingWrapper>
            <Rating
              ratingValue={rating * 20}
              emptyIcon={<StarIcon color="lighray" />}
              fullIcon={<StarIcon color="#ffbc0b" />}
              allowHalfIcon
              readonly
            />
          </StyledRatingWrapper>
        </StyledImageRatingContainer>
        <StyledAboutContainer>
          <StyledName>{name}</StyledName>
          <StyledLocalizationContainer>
            <StyledCityText>{localization.city}</StyledCityText>
            <StyledAddressText>{localization.address}</StyledAddressText>
            {/* <StyledRegionText>{localization.region}</StyledRegionText> */}
          </StyledLocalizationContainer>
          <StyledDescription>{description}</StyledDescription>
          <StyledOpenHourContainer>
            <StyledOpenHourButton
              onMouseEnter={() => setDisplayHours(true)}
              onMouseLeave={() => setDisplayHours(false)}
            >
              <StyledOpenHourButtonText>Open Hours</StyledOpenHourButtonText>
              <ClockIcon />
            </StyledOpenHourButton>

            {displayHours && (
              <StyledOpenHoursBox>{getHours(hours)}</StyledOpenHoursBox>
            )}
          </StyledOpenHourContainer>
        </StyledAboutContainer>
      </StyledContentContainer>
      <StyledMenuLink to={`/restaurants/${id}`}>Go to Details</StyledMenuLink>
    </StyledWrapper>
  );
};
