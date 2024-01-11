import React from 'react';
import {SectionTitle} from "../SectionFile";
import {SectionSubTitle} from "../SectionSubTitle";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledQuestions>
        <SectionTitle>For any questions please mail me:</SectionTitle>
        <SectionSubTitle>hi@pavanmg.in</SectionSubTitle>
        </StyledQuestions>
    );
};

const StyledQuestions = styled.section`
text-align: center;
`;