import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                    <Social/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  margin-top: 40px;
  font-family: 'Dm Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  //.Container {
     position: fixed;
    top: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  //}
  @media ${theme.media.tablet} {
    overflow: hidden;

    svg {
      width: 50px;
      height: 50px;
    }
  }
 
 
`;
