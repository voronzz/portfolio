import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterContainerTop>
                    <FlexWrapper justify={"space-between"}>
                        <Icon iconId={"logoBlack"} width={"100"} height={"60"} viewBox={"0 0 120 60"}/>
                        <Wrapper>
                            <StyledFooterText>+91 12345 09876</StyledFooterText>
                            <StyledFooterText>info@example.com</StyledFooterText>
                            <Social/>
                        </Wrapper>
                    </FlexWrapper>
                </FooterContainerTop>
                <hr/>
                <FooterContainerBottom>
                    <FlexWrapper justify={"space-between"}>
                        <Menu/>
                        <p>Designed and built by <StyledFooterSubText>Pavan
                            MG</StyledFooterSubText> with <StyledFooterSubText>Love</StyledFooterSubText> & <StyledFooterSubText>Coffee</StyledFooterSubText></p>
                    </FlexWrapper>
                </FooterContainerBottom>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin-bottom: 60px;
`
const StyledFooterText = styled.p`
  font-family: 'DM Sans';
  :nth-child(1) {
    padding-right: 35px;
  }
  :nth-child(2) {
    padding-right: 35px;
  }

`
const FooterContainerTop = styled.div`
  padding-bottom: 40px;
  color: ${theme.color.title};

`
const FooterContainerBottom = styled.div`
  padding-top: 40px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
 svg {
    fill: ${theme.color.title};
  }
`
const StyledFooterTextBottom = styled.p`
  font-family: 'DM Sans';

`

const StyledFooterSubText = styled.span`
  background: ${theme.color.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
