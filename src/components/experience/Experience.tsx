import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Container} from "../Container";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type ExperienceProps = {
    title: string;
    company: string;
    city?: string;
    booble: string;
}
export const Experience = (props: ExperienceProps) => {
    return (
        <StyledHeader>
            <StyledContainer>
                <p>{props.title}</p>
                <StyledBable><span>{props.booble}</span></StyledBable>
            </StyledContainer>
            <StyledContainer>
                <ContainerBottom>
                    <FlexWrapper align={'center'}>
                        <Icon iconId={'office-building'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                        <ContainerBottomText>{props.company}</ContainerBottomText>
                    </FlexWrapper>
                    <FlexWrapper align={'center'}>
                        <Icon iconId={'marker'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                        <ContainerBottomText>{props.city}</ContainerBottomText>
                    </FlexWrapper>
                </ContainerBottom>
                <div>
                    <Icon iconId={'calendar'} width={"16"} height={"12"} viewBox={"0 0 16 12"}/>
                    <ContainerBottomText>Sep 2021 - Dec 2021</ContainerBottomText>
                </div>
            </StyledContainer>
            <hr/>
        </StyledHeader>
    );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  p {
    color: ${theme.color.text};
    font-family: Poppins;
    font-size: 20px;
  }

  @media ${theme.media.mobile} {
        p {
          font-size: 16px;
        }
  }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  :nth-child(2) {
    margin-bottom: 24px;
  }
`
const ContainerBottomText = styled.span`
  color: ${theme.color.subText};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-right: 20px;

  @media ${theme.media.mobile} {
      font-size: 8px;
  }
`;

const StyledBable = styled.button`
  width: 84px;
  height: 24px;
  background-color: #D7FFE0;
  border-radius: 100px;

  span {
    color: #018C0F;
    text-align: center;
    font-family: Poppins;
    font-size: 9px;
    font-weight: 600;
  }
`
const ContainerBottom = styled.div`
 display: flex;

  @media ${theme.media.mobile} {
    
  }
`