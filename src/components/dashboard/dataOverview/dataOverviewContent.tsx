import React from 'react';
import styled from 'styled-components';
import ChartElement from './charts';
import Terms from '../terms';
import RequestTableHolder from './requestsTable/';

const DataOverviewContainer = styled.div`
    border-radius: 0.4rem;
    border: solid 0.2rem var(--main-border-color);
    display: flex;
    flex-direction: column;
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

const DataOverviewContent = ({data, addRow}) => {
    const {charts, terms, supportRequests} = data;
    return (
        <DataOverviewContainer>
            <UpperDataOverviewContainer>
                <ChartContainer>
                    <ChartElement title={'General results'} followers={charts.general.followersCount} color={'blue'}/>
                </ChartContainer>

                <ChartContainer>
                    <ChartElement title={'Rating by category'} followers={charts.ratingsByCategory.followersCount} color={'pink'}/>
                </ChartContainer>

                <TermContainer>
                    <Terms terms={terms}/>
                </TermContainer>
            </UpperDataOverviewContainer>

            <RequestTableHolder requests={supportRequests} addRow={addRow}/>
        </DataOverviewContainer>
    );
};

export default DataOverviewContent;
