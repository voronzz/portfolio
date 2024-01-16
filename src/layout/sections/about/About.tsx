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
        <Container>
            <StyledAboutWrapper>
                <FlexWrapper justify={"space-around"} direction={"column"}>
                    <SectionAboutTitle>About Me</SectionAboutTitle>
                    <SectionSubText>The Generator App is an online tool that helps you to export ready-made templates
                        ready to work as your future website. It helps you to combine slides, panels and other
                        components and export it as a set of static files: HTML/CSS/JS.</SectionSubText>
                    <SectionAboutTitle>Work Experience</SectionAboutTitle>
                    <SectionContainerItems>
                        <Experience/>
                    </SectionContainerItems>
                    <SectionAboutTitle>Education</SectionAboutTitle>
                    <SectionContainerItems>
                        <Experience/>
                    </SectionContainerItems>
                </FlexWrapper>
                <Photo src={photo} alt=""/>
            </StyledAboutWrapper>
        </Container>

    );
};


const StyledAboutWrapper = styled.section`
  //margin-top: 200px;
  //min-height: 100vh;
  min-width: 1193px;
  display: flex;
  justify-content: space-between;
`
const SectionAboutTitle = styled.h2`
  margin-bottom: 38px;
  font-size: 42px;
  font-weight: 700;
`
const SectionContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const SectionSubText = styled.p`
  max-width: 708px;
  text-align: left;
  margin-bottom: 38px;
`
const Photo = styled.img`
  width: 834px;
  height: 834px;
  object-fit: cover;
`