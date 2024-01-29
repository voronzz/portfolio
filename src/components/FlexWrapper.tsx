import styled from "styled-components";
import {theme} from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    rowGap?: string;
    gap?: string;
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  height: 100%;
  row-gap: ${props => props.rowGap || ''};

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`