import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/avatar.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
        <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
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
  //margin-top: 220px;
  display: flex;
  height: 100vh;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    `
const SmallText = styled.h2`
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`
const Name = styled.h2 `
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${theme.color.accent};
`

const MainTitle = styled.h1`
  font-size: 58px;
  font-weight: 700;
  letter-spacing: -1px;
`