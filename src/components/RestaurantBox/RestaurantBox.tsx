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

const images = [
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
    alt: "first",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
    alt: "second",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
    alt: "third",
  },
];

export const RestaurantBox = ({
  name,
  description,
  foodType,
  localization,
  starRating,
}: RestaurantElement) => {
  return (
    <StyledWrapper>
      <StyledImageRatingContainer>
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
        <StyledCategory>{foodType}</StyledCategory>
        <StyledLocalizationContainer>
          <StyledCityText>{localization.city}</StyledCityText>
          <StyledAddressText>{localization.address}</StyledAddressText>
          <StyledRegionText>{localization.region}</StyledRegionText>
        </StyledLocalizationContainer>
      </StyledAboutContainer>
    </StyledWrapper>
  );
};
