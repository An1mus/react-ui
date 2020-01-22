import React from 'react';
import { PageContainer } from '../../common/containers';
import DataOverviewHeader from './dataOverviewHeader';
import DataOverviewContent from './dataOverviewContent';

const DataOverview = () => {
    return (
        <PageContainer>
            <DataOverviewHeader />
            <DataOverviewContent/>
        </PageContainer>
    );
};

export default DataOverview;
