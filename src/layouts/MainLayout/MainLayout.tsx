import { PropsWithChildren } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { StyledWrapper, StyledContentContainer } from "./MainLayout.styled";

type MainLayoutProps = PropsWithChildren<{}>;

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <StyledWrapper>
      <Navbar />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledWrapper>
  );
};
