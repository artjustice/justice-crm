import React from 'react';
import * as S from './FormButtonStyle'

const FormButton = ({title, width, marginTop}) => {
    return (
        <S.FormButton width={width} marginTop={marginTop} type='submit'>
            <S.Title children={title} />
        </S.FormButton>
    );
};

export default FormButton;