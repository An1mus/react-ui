import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../common/containers';
import Progress from '../common/progress';
import ChartElement from './charts';

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

const UpperDataOverviewContainer = styled.div`
    display: flex;
    width: 100%;
`;

const ChartContainer = styled.div`
    border-right: solid 0.2rem var(--main-border-color);
    border-bottom: solid 0.2rem var(--main-border-color);
    flex: 2 1 0;
    padding: 2.8rem 2.4rem;
`;

const TermContainer = styled.div`
    border-bottom: solid 0.2rem var(--main-border-color);
    padding: 3.3rem 3.5rem;
    flex: 1 1 0;
`;

const Dashboard = () => {
    return (
        <PageContainer>

            <UpperContainer>
                <h2>Data overview</h2>

                <ProgressContainer>
                    <Progress percentage={70}/>

                    <p className={'color-light'}>
                        <b className={'color-regular'}>643</b> insertions needed to complete
                    </p>
                </ProgressContainer>
            </UpperContainer>

            <DataOverviewContainer>
                <UpperDataOverviewContainer>
                    <ChartContainer>
                        <ChartElement title={'General results'} followers={9401} color={'blue'}/>
                    </ChartContainer>

                    <ChartContainer>
                        <ChartElement title={'Rating by category'} followers={3900} color={'pink'}/>
                    </ChartContainer>

                    <TermContainer>
                        Some terms
                    </TermContainer>
                </UpperDataOverviewContainer>
            </DataOverviewContainer>
        </PageContainer>
    )
};

export default Dashboard;
