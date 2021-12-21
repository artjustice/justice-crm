import React from 'react';
import * as S from './ButtonStyle'
import { ReactComponent as HomeSvg } from '../../../assets/icons/home.svg'

const Button = () => {
    return (
        <S.Button>
            <S.Icon>
                <HomeSvg />
            </S.Icon>
            <S.Title>
                Main page
            </S.Title>
        </S.Button>
    );
};

export default Button;