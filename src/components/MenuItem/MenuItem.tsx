import { Menu } from "../../types/restaurantDetails";
import {
  StyledItemName,
  StyledItemPrice,
  StyledWrapper,
} from "./MenuItem.styled";
type MenuItemProps = Menu;

export const MenuItem = ({ price, name }: MenuItemProps) => {
  return (
    <StyledWrapper>
      <StyledItemName>{name}</StyledItemName>
      <StyledItemPrice>{price} zl</StyledItemPrice>
    </StyledWrapper>
  );
};
