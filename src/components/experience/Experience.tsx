import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Experience = () => {
    return (
        <StyledHeader>
            <FlexWrapper direction={"column"}>
                <h3>Junior Web Developer</h3>
                <div>
                    <span>Dr. Rajkumar’s Learning App</span>
                    <span>Bengaluru</span>
                </div>
            </FlexWrapper>
            <FlexWrapper direction={"column"} justify={"center"} align={"flex-end"}>
                <span>Full Time</span>
                <div>
                    <span>Icon</span>
                    <span>Sep 2021 - Dec 2021</span>
                </div>
            </FlexWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.div `
display: flex;
justify-content: center;
`;