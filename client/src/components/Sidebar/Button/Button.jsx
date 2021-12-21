import React from 'react';
import * as S from './ButtonStyle'


const Button = ({path, icon, title, logOut: log}) => {
    return (
        <S.Button to={path} logOut={log}>
            <S.Icon children={icon} />
            <S.Title children={title}/>
        </S.Button>
    );
};

export default Button;