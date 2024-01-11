import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={"space-around"}>
                <Logo iconId={"logoBlack"} width={"100"} height={"60"} viewBox={"0 0 120 120"}/>
                <p>+91 12345 09876</p>
                <p>info@example.com</p>
                <Social/>
            </FlexWrapper>
            <hr/>
            <FlexWrapper justify={"space-around"}>
                <Menu/>
                <p>Designed and built by <span>Pavan MG</span>with <span>Love</span> & <span>Coffee</span></p>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
`