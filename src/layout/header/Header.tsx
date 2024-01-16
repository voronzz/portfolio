import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'}>
                <Logo/>
                <Menu/>
                <Social/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    margin-top: 40px;
    font-family: 'Dm Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  
`;
