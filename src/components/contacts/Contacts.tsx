import React from 'react';
import {SectionTitle} from "../SectionFile";
import {SectionSubTitle} from "../SectionSubTitle";
import styled from "styled-components";
import {Container} from "../Container";

export const Contacts = () => {
    return (
        <StyledQuestions>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <SectionSubTitle>hi@pavanmg.in</SectionSubTitle>
            </Container>
        </StyledQuestions>
    );
};

const StyledQuestions = styled.section`
  margin-top: 184px;
  text-align: center;
`;