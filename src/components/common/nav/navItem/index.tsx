import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavItemContainer = styled.div`
    .main-link {
        border-right: 0.2rem solid var(--main-border-color);
        display: block;
        padding: 1.6rem 2rem;
        position: relative;
        margin: 0.5rem -0.2rem 0.5rem 0;
        
        &.active {
            border-right: 0.2rem solid var(--main-blue-color);
        }
    }

    svg {
        fill: var(--icons-idle-color);
    }
        
    .active,
    :hover {
        svg {
            fill: var(--main-blue-color);
        }
    }
`;

interface Props {
    exact: boolean;
    to: string;
    title: string;
    Icon: React.FunctionComponent;
}

const NavItem = ({exact, Icon, title, to}: Props) => {
    return (
        <NavItemContainer>
            <NavLink exact={exact} to={to} title={title} className={'main-link'} activeClassName={'active'}>
                <Icon />
            </NavLink>
        </NavItemContainer>
    );
};

export default NavItem;
