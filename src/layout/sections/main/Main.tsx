import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/avatar.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <Wrapper>
                        <SmallText>Hi 👋, </SmallText>
                        <SmallText>My name is</SmallText>
                        <Name>Pavan MG</Name>
                        <MainTitle>I build things for web</MainTitle>
                    </Wrapper>

                    <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
  display: flex;
  height: 100vh;
  padding: 0;
`

const Photo = styled.img`
  max-width: 349px;
  height: 349px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    max-width: 249px;
    height: 249px;
  }
  
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const SmallText = styled.h2`
    //${font({weight: 700, Fmin: 36, Fmax: 58})};
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;


  @media ${theme.media.tablet} {
    font-size: 48px;
  }
  @media ${theme.media.mobile} {
    font-size: 34px;
    font-weight: 700;
  }
`
const Name = styled.h2`
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${theme.color.accent};
  
  @media ${theme.media.tablet} {
    font-size: 48px;
  }
  @media ${theme.media.mobile} {
    font-size: 34px;
    font-weight: 700;
  }

`

const MainTitle = styled.h1`
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
  
  @media ${theme.media.tablet} {
    font-size: 48px;
  }
  @media ${theme.media.mobile} {
    font-size: 34px;
    font-weight: 700;
  }
`