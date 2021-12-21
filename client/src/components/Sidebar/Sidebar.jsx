import React from 'react';
import * as S from './SidebarStyle'
import {ReactComponent as LogoSvg } from '../../assets/logo.svg'
import Button from "./Button/Button";

const Sidebar = () => {
    return (
        <S.Sidebar>
            <S.Logo>
                <LogoSvg />
            </S.Logo>
            <Button />
        </S.Sidebar>
    );
};

export default Sidebar;