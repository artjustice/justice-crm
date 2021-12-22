import React from 'react';
import * as S from './FormButtonStyle'

const FormButton = ({title, width, marginTop, type}) => {
    return (
        <S.FormButton width={width} marginTop={marginTop} type={type}>
            <S.Title children={title} />
        </S.FormButton>
    );
};

export default FormButton;