import React from 'react';
import styled from 'styled-components';
import Progress from '../../common/progress';

const UpperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.5rem;
`;

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    
    p {
        margin-left: 1.2rem;
        margin-bottom: 0.3rem;
    }
`;

const DataOverviewHeader = () => {
    return (
        <UpperContainer>
            <h2>Data overview</h2>

            <ProgressContainer>
                <Progress percentage={70}/>

                <p className={'color-light'}>
                    <b className={'color-regular'}>643</b> insertions needed to complete
                </p>
            </ProgressContainer>
        </UpperContainer>
    );
};

export default DataOverviewHeader;
