import { ImageSlider } from "../ImageSlider/ImageSlider";
import { StyledWrapper } from "./RestaurantBox.styled";

const images = [
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/room3.jpg",
    alt: "",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/music.jpg",
    alt: "",
  },
  {
    url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/livingroom.jpg",
    alt: "",
  },
];

export const RestaurantBox = () => {
  return (
    <StyledWrapper>
      <ImageSlider images={images} />
    </StyledWrapper>
  );
};
