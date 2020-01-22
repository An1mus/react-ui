import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageContainer } from '../../common/containers';
import DataOverviewHeader from './dataOverviewHeader';
import DataOverviewContent from './dataOverviewContent';
import getData from '../../../redux/actions/dataActions';

const DataOverview = ({data, getData}) => {
    useEffect(() => {
        getData();
    }, []);

    return (
        <PageContainer>
            {
                data.general && !data.isRequesting // wouldn't be applicable to prod ofc, to save time
                    ?
                        <>
                            <DataOverviewHeader insertions={data.general.insertionsCount}/>
                            <DataOverviewContent data={data}/>
                        </>
                    : <h2>Data is loading</h2>

            }
        </PageContainer>
    );
};

const mapStoreToProps = (store) => {
    const {data} = store;
    return {
        data: data.appData
    }
};

const mapDispatchToProps = {
    getData
};

export default connect(mapStoreToProps, mapDispatchToProps)(DataOverview);
