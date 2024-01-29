import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionFile";
import {SectionSubTitle} from "../SectionSubTitle";
import {FlexWrapper} from "../FlexWrapper";
import {Project} from "./project/Project";
import project1 from "../../assets/images/project-1.png"
import project2 from "../../assets/images/project-2.png"
import project3 from "../../assets/images/project-3.png"
import project4 from "../../assets/images/project-4.png"
import project5 from "../../assets/images/project-5.png"
import project6 from "../../assets/images/project-6.png"
import {Container} from "../Container";
import {theme} from "../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionSubTitle>Things I’ve built so far</SectionSubTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} rowGap={'62px'}>
                    <Project src={project1}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                    <Project src={project2}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                    <Project src={project3}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                    <Project src={project4}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                    <Project src={project5}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                    <Project src={project6}
                             title={"Project Tile goes here"}
                             text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    />
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  //height: 100vh;

  @media ${theme.media.tablet} {
    h2 {
      font-size: 42px;
    }
  }
`