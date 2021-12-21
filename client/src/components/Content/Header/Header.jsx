import React from 'react';
import * as S from './HeaderStyle'
import Button from "./Button/Button";

const Header = ({title, description}) => {
    return (
        <S.Header>
            <S.Left>
                <S.Title children={title} />
                <S.Description children={description} />
            </S.Left>
            <Button title='Create a product'/>
        </S.Header>
    );
};

export default Header;