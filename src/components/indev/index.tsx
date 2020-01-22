import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../common/typography';

const ComponentContainer = styled.div`
    background-color: var(--main-background-color);
    padding: 2.5rem 3rem;
    width: 100%;
`;

const InDevelopment = () => {
    return (
        <ComponentContainer>
            <Heading2 text={'Page is in development'}/>
        </ComponentContainer>
    )
};

export default InDevelopment;
