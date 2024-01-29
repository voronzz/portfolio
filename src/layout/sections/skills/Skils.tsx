import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionFile";
import {SectionSubTitle} from "../../../components/SectionSubTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionSubTitle>Technologies I’ve been working with recently</SectionSubTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"html"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"css"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"js"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"react"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"redux"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"bootstrap"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"tailwind"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"sass"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"git"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"greensock"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"vscode"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                    <Skill iconId={"gitHub"} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  //margin-top: 200px;
  //min-height: 100vh;
  //min-width: 1193px;
  
  @media ${theme.media.tablet} {
    h2 {
      font-size: 42px;
    }
    div {
      gap: 10px;
    }
  }
  @media ${theme.media.mobile} {
    padding: 0;
    
    p {
      font-size: 28px;
    }
  }
  
  
`