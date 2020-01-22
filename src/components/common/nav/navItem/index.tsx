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
    item: any;
}

const NavItem = ({item}: Props) => {
    return (
        <NavItemContainer>
            <NavLink exact={item.exact} to={item.to} title={item.title} className={'main-link'} activeClassName={'active'}>
                    {<item.icon />}
            </NavLink>
        </NavItemContainer>
    );
};

export default NavItem;
