import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../common/typography';

const ComponentContainer = styled.div`
    background-color: var(--main-background-color);
    padding: 2.5rem 3rem;
    width: 100%;
`;

const NotFound = () => {
    return (
        <ComponentContainer>
            <Heading2 text={'Page not found'}/>
        </ComponentContainer>
    )
};

export default NotFound;
