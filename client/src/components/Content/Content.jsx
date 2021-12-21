import React from 'react';
import * as S from './ContentStyle'
import Header from "./Header/Header";

const Content = ({content}) => {
    return (
        <S.Content>
            <Header
                title='Sales statistics'
                description='Welcome to CRM dashboard'
            />
            {content}
        </S.Content>
    );
};

export default Content;