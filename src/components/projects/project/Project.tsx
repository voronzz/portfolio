import React, {Component} from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {Icon} from "../../icon/Icon";

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
                <span>Tech stack : HTML , JavaScript, SASS, React</span>
                <FlexWrapper justify={'space-around'}>
                    <FlexWrapper>
                        <Icon  iconId={'link'}/>
                        <Link>Live Preview</Link>
                    </FlexWrapper>
                    <FlexWrapper>
                        <Icon  iconId={'gitMin'}/>
                        <Link>View Code</Link>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledProject>
        );
}

const StyledProject = styled.div`
max-width: 375px;
width: 100%;
`
const Image = styled.img`
width: 100%;
  object-fit: cover;
`
const Title = styled.h3``
const Text = styled.p``
const Link = styled.a``