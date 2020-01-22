import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageContainer } from '../../common/containers';
import DataOverviewHeader from './dataOverviewHeader';
import DataOverviewContent from './dataOverviewContent';

const DataOverview = () => {
    useEffect(() => {

    }, []);

    return (
        <PageContainer>
            <DataOverviewHeader/>
            <DataOverviewContent/>
        </PageContainer>
    );
};

export default connect()(DataOverview);
