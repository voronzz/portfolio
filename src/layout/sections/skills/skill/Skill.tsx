import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string;
    width: string;
    height: string;
    viewBox: string;
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}/>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 15%;
`