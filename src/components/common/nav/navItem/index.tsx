import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavItemContainer = styled.div`
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
            <NavLink to={item.to} title={item.title} activeClassName={'active'}>
                    {<item.icon />}
            </NavLink>
        </NavItemContainer>
    );
};

export default NavItem;
