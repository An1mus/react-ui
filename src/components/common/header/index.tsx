import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const LogoContainer = styled.div`
    height: 4.1rem;
    width: 4rem;
    
    svg {
        width: 100%;
        height: 100%;
    }
`;
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 2.1rem 0.9rem 1.2rem;
    align-items: center;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <NavContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <Button title={'Premium'} click={() => alert('Stub alert')} primary={true}/>
        </NavContainer>
    )
};

export default Header;
