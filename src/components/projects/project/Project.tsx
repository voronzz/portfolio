import React, {Component} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {Icon} from "../../icon/Icon";
import {GlobalStyle} from "../../../styles/Global.styled";
import {theme} from "../../../styles/Theme";

type ProjectPropsType = {
    title: string;
    text: string;
    src: string;

};
export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <SubText>Tech stack : <span>HTML , JavaScript, SASS, React</span></SubText>
            <FlexWrapper justify={'space-around'}>
                <div>
                    <Icon iconId={'link'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    <Link>Live Preview</Link>
                </div>
                <div>
                    <Icon iconId={'gitMin'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                    <Link>View Code</Link>
                </div>
            </FlexWrapper>
        </StyledProject>
    );
}

const StyledProject = styled.div`
  max-width: 375px;
  max-height: 570px;
  width: 100%;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  
  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  padding-top: 27px;
  padding-bottom: 17px;
`
const Text = styled.p`
  color: ${theme.color.text};
  font-weight: 300;
  text-align: left;
  padding: 0 30px 12px;
`
const SubText = styled.p`
  font-size: 16px;
  color: ${theme.color.title};
  padding: 0 30px 20px;

  span {
    font-size: 14px;
    font-weight: 300;
  }
`
const Link = styled.a`
`