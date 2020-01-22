import React from 'react';
import styled from 'styled-components';

interface Props {
    percentage: number;
}

const ProgressContainer = styled.div`
    background: var(--progress-bar-background-color);
    border-radius: 0.2rem;
    height: 0.4rem;
    margin: 0.3rem 0;
    width: 25rem;
    
    div {
        background: var(--progress-bar-bar-color);
        height: 100%;
        border-radius: 0.2rem;
        max-width: ${(props) => props.percentage}%;
    }
`;

const Progress = ({percentage}: Props) => {
    return (
        <ProgressContainer percentage={percentage}>
            <div></div>
        </ProgressContainer>
    )
};

export default Progress;
