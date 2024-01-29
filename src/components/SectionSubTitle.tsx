import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionSubTitle = styled.p`
  text-align: center;
  margin-bottom: 124px;
  font-size: 32px;

  @media ${theme.media.tablet} {
    margin-bottom: 100px;
  }
`