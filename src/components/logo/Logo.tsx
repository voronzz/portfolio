import React from 'react';
import {Icon} from "../icon/Icon";

type LogoPropsType = {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;
}
export const Logo = (props: LogoPropsType) => {

    return (
        <a href=''>
            <Icon iconId={props.iconId} width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}/>
        </a>
    );
};