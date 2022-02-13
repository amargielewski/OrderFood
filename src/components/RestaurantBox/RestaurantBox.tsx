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
} from "./RestaurantBox.styled";
import { StarIcon } from "../../icons/StarIcon";
import { RestaurantElement } from "../../types/restaurant";

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
          <StyledCityText>{localization.city}</StyledCityText>
          <StyledAddressText>{localization.address}</StyledAddressText>
          <StyledRegionText>{localization.region}</StyledRegionText>
        </StyledLocalizationContainer>
      </StyledAboutContainer>
    </StyledWrapper>
  );
};
