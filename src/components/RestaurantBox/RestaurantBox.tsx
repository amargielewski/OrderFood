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
          <StyledLocalizationContainer>
            <StyledLocalizationTitleBox>
              <StyledLocalizationTitle>Localization</StyledLocalizationTitle>
              <LocalizationIcon />
            </StyledLocalizationTitleBox>

            <StyledCityText>{localization.city}</StyledCityText>
            <StyledAddressText>{localization.address}</StyledAddressText>
            <StyledRegionText>{localization.region}</StyledRegionText>
          </StyledLocalizationContainer>
        </StyledAboutContainer>
      </StyledContentContainer>
      <StyledMenuLink to="/">Go to Details</StyledMenuLink>
    </StyledWrapper>
  );
};
