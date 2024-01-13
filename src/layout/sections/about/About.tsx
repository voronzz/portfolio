import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photo from "../../../assets/images/box.png";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionFile";
import {SectionSubTitle} from "../../../components/SectionSubTitle";
import {Experience} from "../../../components/experience/Experience";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyledAboutWrapper>
            <Container>
            <FlexWrapper justify={"space-around"} direction={"column"}>
                <SectionTitle>About Me</SectionTitle>
                <SectionSubText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</SectionSubText>
                <SectionTitle>Work Experience</SectionTitle>
                <Experience/>
                <SectionTitle>Education</SectionTitle>
                <Experience/>
            </FlexWrapper>
            <Photo src={photo} alt=""/>
            </Container>
        </StyledAboutWrapper>
    );
};

const Photo = styled.img`
  width: 834px;
  height: 834px;
  object-fit: cover;
`

const StyledAboutWrapper = styled.section`
  //margin-top: 200px;
  min-height: 100vh;
  min-width: 1193px;
  display: flex;
  justify-content: space-between;
`
const SectionSubText = styled.p `
min-width: 708px;
`