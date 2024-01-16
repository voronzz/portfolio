import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Social = () => {
    return (
        <SocialMenu>
            <li><a href=""><Icon iconId={'git-icon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></a></li>
            <li><a href=""><Icon iconId={'twitter-icon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></a></li>
            <li><a href=""><Icon iconId={'linkedin-icon'} width={"30"} height={"30"} viewBox={"0 0 30 30"}/></a></li>
        </SocialMenu>
    );
};

const SocialMenu = styled.ul`
 
    display: flex;
    list-style-type: none;
  
li {
  display: flex;
  align-items: center;
  padding-right: 20px;
}
}
  a {
    text-decoration: none;
    color: #666666;
  }
  svg {
    fill: ${theme.color.text};
`;