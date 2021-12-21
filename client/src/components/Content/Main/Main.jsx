import React from 'react';
import * as S from './MainStyle'

const Main = () => {
    return (
        <>
            <S.Dev />
            <S.Wrapper>
                <S.Left>
                    <S.Top />
                    <S.Bottom />
                </S.Left>
                <S.Right />
            </S.Wrapper>
        </>
    );
};

export default Main;