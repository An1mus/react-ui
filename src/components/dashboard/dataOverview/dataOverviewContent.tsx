import React from 'react';
import styled from 'styled-components';
import ChartElement from './charts';
import Terms from '../terms';

const DataOverviewContainer = styled.div`
    border-radius: 0.4rem;
    border: solid 0.2rem var(--main-border-color);
    display: flex;
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


// Presentational purposes
const TermContainer = styled.div`
    border-bottom: solid 0.2rem var(--main-border-color);
    padding: 3.3rem 3.5rem;
    flex: 1 1 0;
`;

const DataOverviewContent = () => {
    return (
        <DataOverviewContainer>
            <UpperDataOverviewContainer>
                <ChartContainer>
                    <ChartElement title={'General results'} followers={9401} color={'blue'}/>
                </ChartContainer>

                <ChartContainer>
                    <ChartElement title={'Rating by category'} followers={3900} color={'pink'}/>
                </ChartContainer>

                <TermContainer>
                    <Terms />
                </TermContainer>
            </UpperDataOverviewContainer>
        </DataOverviewContainer>
    );
};

export default DataOverviewContent;
