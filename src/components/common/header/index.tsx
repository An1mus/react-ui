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
const HeaderContainer = styled.div`
    display: flex;
    border-bottom: .2rem solid var(--main-border-color);
    flex-direction: row;
    padding: 1rem 2.1rem 0.9rem 1.2rem;
    align-items: center;
    justify-content: space-between;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>

            {/* TODO: add inner menu */}

            <Button title={'Premium'} click={() => alert('Stub alert')} primary={true}/>
        </HeaderContainer>
    )
};

export default Header;
