import React from 'react';
import RegForm from "./RegForm/RegForm";
import * as S from './AuthStyle'
import poster from '../../assets/auth-poster.png'

const Auth = () => {
    return (
        // <S.Auth>
            <>
                <RegForm />
                <S.Poster src={poster}/>
            </>
        // </S.Auth>
    );
};

export default Auth;