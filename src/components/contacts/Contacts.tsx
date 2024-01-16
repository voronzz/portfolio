import React from 'react';
import {SectionTitle} from "../SectionFile";
import {SectionSubTitle} from "../SectionSubTitle";
import styled from "styled-components";
import {Container} from "../Container";
import {theme} from "../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledQuestions>
            <Container>
                <StyledContactTitle>For any questions please mail me:</StyledContactTitle>
                <StyledContactSubTitle>hi@pavanmg.in</StyledContactSubTitle>
            </Container>
        </StyledQuestions>
    );
};

const StyledQuestions = styled.section`
  //margin-top: 184px;
  text-align: center;
`;
const StyledContactTitle = styled.h2`
  font-family: 'DM Sans';
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
`

const StyledContactSubTitle = styled.p`
  font-family: 'DM Sans';
  font-size: 58px;
  font-weight: 700;
  background: ${theme.color.accent};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`