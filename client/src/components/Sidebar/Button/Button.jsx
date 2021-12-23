import React from 'react';
import * as S from './ButtonStyle'


const Button = ({path, icon, title, logout, ...props}) => {
    return (
        <S.Button to={path} logout={logout} {...props}>
            <S.Icon children={icon} />
            <S.Title children={title}/>
        </S.Button>
    );
};

export default Button;