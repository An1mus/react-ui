import React from 'react';
import styled from 'styled-components';

interface Props {
    click: Function,
    title: string,
    primary: boolean,
}

const ButtonContainer = styled.button`
    background: ${props => props.primary ? 'var(--main-blue-color)' : 'var(--white-background-color)'};
    border: 0.1rem solid var(--main-blue-color);
    border-radius: 0.4rem;
    color: ${props => props.primary ? 'var(--white-font-color)' : 'var(--main-blue-color)'};
    cursor: pointer;
    font-size: 1.1rem;
    outline: none;
    padding: 0.8rem 1.4rem;
    
`;

const Button = ({click, title, primary}: Props) => (
    <ButtonContainer onClick={click} primary>{title}</ButtonContainer>
);

export default Button
