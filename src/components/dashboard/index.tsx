import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../common/typography';
import { PageContainer } from '../common/containers';
import Progress from '../common/progress';

const DataOverviewContainer = styled.div`
    border-radius: 0.4rem;
    border: solid 0.2rem var(--main-border-color);
    background-color: var(--white-background-color);
    
    display: flex;
`;

const UpperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2.5rem;
`;

const ProgressContainer = styled.div`
    display: flex;
    align-items: flex-end;
    
    p {
        margin-left: 1.2rem;
    }
`;

const Dashboard = () => {
    return (
        <PageContainer>

            <UpperContainer>
                <Heading2 text={'Data overview'}/>

                <ProgressContainer>
                    <Progress percentage={70}/>

                    <p className={'color-light'}>
                        <b className={'color-regular'}>643</b> insertions needed to complete
                    </p>
                </ProgressContainer>
            </UpperContainer>

            <DataOverviewContainer>

            </DataOverviewContainer>
        </PageContainer>
    )
};

export default Dashboard;
