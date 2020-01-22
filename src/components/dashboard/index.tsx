import React from 'react';
import styled from 'styled-components';
import {Heading2} from '../common/typography';

const DashboardContainer = styled.div`
    background-color: var(--main-background-color);
    padding: 2.5rem 3rem;
    width: 100%;
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Heading2 text={'Data overview'}/>
        </DashboardContainer>
    )
};

export default Dashboard;
