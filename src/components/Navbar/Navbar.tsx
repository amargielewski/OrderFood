import { HomeIcon } from "../../icons/HomeIcon";
import { PizzaIcon } from "../../icons/PizzaIcon";
import { SettingIcon } from "../../icons/SettingIcon";
import {
  StyledMainWrapper,
  StyledContainer,
  StyledSiteLogo,
  StyledLogoContainer,
  StyledIconWrapper,
  StyledNavbarListContainer,
  StyledListItem,
  StyledListItemText,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <StyledMainWrapper>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledIconWrapper>
            <PizzaIcon />
          </StyledIconWrapper>

          <StyledSiteLogo>food order</StyledSiteLogo>
        </StyledLogoContainer>
        <StyledNavbarListContainer>
          <StyledListItem>
            <HomeIcon />
            <StyledListItemText>home</StyledListItemText>
          </StyledListItem>
          <StyledListItem>
            <SettingIcon />
            <StyledListItemText>settings</StyledListItemText>
          </StyledListItem>
        </StyledNavbarListContainer>
      </StyledContainer>
    </StyledMainWrapper>
  );
};
