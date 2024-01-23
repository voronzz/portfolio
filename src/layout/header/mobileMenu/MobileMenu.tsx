import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Tech Stack</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }

  a {
    text-decoration: none;
    color: #666666;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(255, 250, 250, 0.9);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>
          `
            display: flex;
            justify-content: center;
            align-items: center;
          `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;
  
  span {
    display: flex;
    width: 36px;
    height: 2px;
    background-color: ${theme.color.text};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>
            `
              background-color: rgba(255, 255, 255, 0);
            `}
    &::before {
      content: '';
      width: 36px;
      height: 2px;
      background-color: ${theme.color.text};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>
              `
                transform: rotate(-45deg) translateY(0);
              `}
    }

    &::after {
      content: '';
      width: 24px;
      height: 2px;
      background-color: ${theme.color.text};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>
              `
                transform: rotate(45deg) translateY(0);
                width: 36px;
              `}
    }
  }
`