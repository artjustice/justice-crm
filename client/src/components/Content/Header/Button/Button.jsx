import React from 'react';
import * as S from './ButtonStyle'
import {ReactComponent as CreateSvg} from "../../../../assets/icons/create.svg";

const Button = ({title}) => {
    return (
        <S.Button>
            <CreateSvg />
            <S.Title children={title} />
        </S.Button>
    );
};

export default Button;