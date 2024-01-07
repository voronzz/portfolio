import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Social = () => {
    return (
        <SocialMenu>
        <ul>
            <li><a href=""><Icon iconId={'git-icon'}/></a></li>
            <li><a href=""><Icon iconId={'twitter-icon'}/></a></li>
            <li><a href=""><Icon iconId={'linkedin-icon'}/></a></li>
        </ul>
        </SocialMenu>
    );
};

const SocialMenu = styled.nav `
ul {
    display: flex;
    gap: 55px;
    list-style-type: none;
}
a {
    text-decoration: none;
    color: #666666;
}
`;