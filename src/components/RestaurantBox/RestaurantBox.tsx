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

export const RestaurantBox = ({ name }: RestaurantElement) => {
  return (
    <StyledWrapper>
      <StyledImageRatingContainer>
        <ImageSlider images={images} />
        <StyledRatingWrapper>
          <Rating
            ratingValue={80}
            emptyIcon={<StarIcon color="lighray" />}
            fullIcon={<StarIcon color="#ffbc0b" />}
            allowHalfIcon
            readonly
          />
        </StyledRatingWrapper>
      </StyledImageRatingContainer>
      <StyledAboutContainer>
        <StyledName>kebab u pajdy</StyledName>
        <StyledDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          maiores pariatur corrupti doloribus aperiam itaque autem! At eum quam,
          illo, quisquam sit natus, dolor autem odio eos saepe perspiciatis
          dolorum
        </StyledDescription>
        <StyledCategory>Kebab</StyledCategory>
        <StyledLocalizationContainer>
          <StyledCityText>Kraków</StyledCityText>
          <StyledAddressText>Floriańska 9</StyledAddressText>
          <StyledRegionText>Małopolska</StyledRegionText>
        </StyledLocalizationContainer>
      </StyledAboutContainer>
    </StyledWrapper>
  );
};
