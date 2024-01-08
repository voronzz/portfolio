import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/avatar.png";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <div>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <Wrapper>
                    <span>Hi 👋, </span>
                    <span>My name is</span>
                    <Name>Pavan MG</Name>
                    <MainTitle>I build things for web</MainTitle>
                </Wrapper>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    `

const Name = styled.h2 ``

const MainTitle = styled.h1``