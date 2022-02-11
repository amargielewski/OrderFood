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
        <StyledLogoContainer to="/">
          <StyledIconWrapper>
            <PizzaIcon />
          </StyledIconWrapper>

          <StyledSiteLogo>food order</StyledSiteLogo>
        </StyledLogoContainer>
        <StyledNavbarListContainer>
          <StyledListItem to={"/"}>
            <HomeIcon />
            <StyledListItemText>home</StyledListItemText>
          </StyledListItem>
          <StyledListItem to={"/settings"} rotation={0}>
            <SettingIcon />
            <StyledListItemText>settings</StyledListItemText>
          </StyledListItem>
        </StyledNavbarListContainer>
      </StyledContainer>
    </StyledMainWrapper>
  );
};
