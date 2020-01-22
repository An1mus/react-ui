import React from 'react';
import styled from 'styled-components';

interface TermProps {
    item: number,
    index: number
}

const TermContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    line-height: 2.5;
    margin: 1.25rem 0 1.25rem 0;
`;

const TERM = ({index, item}: TermProps) => {
    return (
        <TermContainer>
            <span className={'color-light'}>TERM {index + 1}</span>
            <span>{item}</span>
        </TermContainer>
    );
};

const TermsContainer = styled.div`
    padding: 0.5rem 0;
`;

const Terms = () => {
    const TERMS = [85.08, 1.76, 33.42, 75.11]; //Just for presentation
    return (
        <TermsContainer>
            {TERMS.map((item, index) => (<TERM item={item} key={index} index={index}/>))}
        </TermsContainer>
    )
};

export default Terms;
