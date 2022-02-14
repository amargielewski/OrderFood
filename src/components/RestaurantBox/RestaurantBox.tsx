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
  StyledLocalizationTitle,
  StyledLocalizationTitleBox,
  StyledMenuLink,
  StyledContentContainer,
  StyledOpenHourContainer,
  StyledInfoContainer,
} from "./RestaurantBox.styled";
import { StarIcon } from "../../icons/StarIcon";
import { RestaurantElement } from "../../types/restaurant";
import { LocalizationIcon } from "../../icons/LocalizationIcon";

export const RestaurantBox = ({
  name,
  description,
  foodType,
  localization,
  starRating,
  images,
  id,
  openHours,
}: RestaurantElement) => {
  return (
    <StyledWrapper>
      <StyledContentContainer>
        <StyledImageRatingContainer>
          <StyledCategory>{foodType}</StyledCategory>
          <ImageSlider images={images} />
          <StyledRatingWrapper>
            <Rating
              ratingValue={starRating * 20}
              emptyIcon={<StarIcon color="lighray" />}
              fullIcon={<StarIcon color="#ffbc0b" />}
              allowHalfIcon
              readonly
            />
          </StyledRatingWrapper>
        </StyledImageRatingContainer>
        <StyledAboutContainer>
          <StyledName>{name}</StyledName>
          <StyledDescription>{description}</StyledDescription>
          <StyledInfoContainer>
            <StyledLocalizationContainer>
              <StyledLocalizationTitleBox>
                <StyledLocalizationTitle>Localization</StyledLocalizationTitle>
                <LocalizationIcon />
              </StyledLocalizationTitleBox>
              <StyledCityText>{localization.city}</StyledCityText>
              <StyledAddressText>{localization.address}</StyledAddressText>
              <StyledRegionText>{localization.region}</StyledRegionText>
            </StyledLocalizationContainer>
            <StyledOpenHourContainer></StyledOpenHourContainer>
          </StyledInfoContainer>
        </StyledAboutContainer>
      </StyledContentContainer>
      <StyledMenuLink to={`/restaurants/${id}`}>Go to Details</StyledMenuLink>
    </StyledWrapper>
  );
};
