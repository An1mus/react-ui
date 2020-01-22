import React from 'react';
import styled from 'styled-components';
import {ReactComponent as DashboardIcon} from '../../../assets/menu/dashboard.svg';
import {ReactComponent as ChatIcon} from '../../../assets/menu/chat.svg';
import {ReactComponent as FolderIcon} from '../../../assets/menu/folder.svg';
import {ReactComponent as MailIcon} from '../../../assets/menu/message.svg';
import {ReactComponent as SettingIcon} from '../../../assets/menu/cog.svg';
import NavItem from './navItem';

const NavContainer = styled.div`
    background: var(--white-background-color);
    border-right: .2rem solid var(--main-border-color);
    display: flex;
    flex-direction: column;
    padding: 4rem 0rem;
    /*position: fixed;
    left: 0;
    top: 6.2rem;
    bottom: 0;*/
`;

const Nav = () => {
    const NavItems = [
        {exact: true, to: '/', title: 'Dashboard', icon: DashboardIcon},
        {exact: false, to: '/chat', title: 'Chat', icon: ChatIcon},
        {exact: false, to: '/files', title: 'Files', icon: FolderIcon},
        {exact: false, to: '/mail', title: 'Mail', icon: MailIcon},
        {exact: false, to: '/settings', title: 'Settings', icon: SettingIcon},
    ];
    return (
        <NavContainer>
            {NavItems.map((item, index) => (<NavItem key={index} item={item}/>) )}
        </NavContainer>
    )
};

export default Nav;
