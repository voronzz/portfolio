import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tech Stack</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
ul {
    display: flex;
    gap: 55px;
    list-style-type: none;
}
  @media ${theme.media.tablet} {
    display: none;
  }
a {
    text-decoration: none;
    color: #666666;
}
`;