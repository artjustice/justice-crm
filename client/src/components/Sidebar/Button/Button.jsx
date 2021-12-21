import React from 'react';
import * as S from './ButtonStyle'


const Button = ({path, icon, title}) => {
    return (
        <S.Button to={path}>
            <S.Icon children={icon} />
            <S.Title children={title}/>
        </S.Button>
    );
};

export default Button;