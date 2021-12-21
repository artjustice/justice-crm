import React from 'react';
import * as S from './SidebarStyle'
import {ReactComponent as LogoSvg } from '../../assets/logo.svg'
import { ReactComponent as MainSvg } from '../../assets/icons/main.svg'
import { ReactComponent as ProductSvg } from '../../assets/icons/product.svg'
import { ReactComponent as PercentSvg } from '../../assets/icons/percent.svg'
import { ReactComponent as CabinetSvg } from '../../assets/icons/cabinet.svg'
import { ReactComponent as LogOutSvg } from '../../assets/icons/log.svg'

import Button from "./Button/Button";

const Sidebar = () => {
    return (
        <S.Sidebar>
            <S.Logo>
                <LogoSvg />
            </S.Logo>
            <Button
                path='/'
                icon={<MainSvg />}
                title='Main page'
            />
            <Button
                path='/products'
                icon={<ProductSvg />}
                title='My Products'
            />
            <Button
                path='/sales'
                icon={<PercentSvg />}
                title='My sales'
            />
            <Button
                path='/cabinet'
                icon={<CabinetSvg />}
                title='Personal Cabinet'
            />
            <S.Dev />
            <Button
                path='/logout'
                icon={<LogOutSvg />}
                title='Log out'
                logOut
            />
        </S.Sidebar>
    );
};

export default Sidebar;