import React from 'react';
import RegForm from "./RegForm/RegForm";
import * as S from './AuthStyle'
import poster from '../../assets/auth-poster.png'

const Auth = () => {
    return (
        <>
            <RegForm />
            <S.Poster img={poster}/>
        </>
    );
};

export default Auth;