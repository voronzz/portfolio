import React from 'react';
import iconsSprite from '../../assets/images/icon-sprite.svg';

type IconPropsType = {
    iconId: string;
 }
export const Icon = (props: IconPropsType) => {

    return (
        <svg width="50" height="50" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
           <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
        );
    };

