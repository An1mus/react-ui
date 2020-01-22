import React from 'react';
import styled from 'styled-components';
import RequestTable from './requestsTable';

const TableHeading = styled.div`
    align-items: center;
    justify-content: space-between;
`;

const RequestsTableContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.9rem 2.5rem 2.7rem 2.4rem;
`;

const LinkButton = styled.a`
    font-family: Helvetica;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    opacity: 1;
    transition: all .3s;
    margin-top: 3rem;
    
    &.highlighted {
        color: #1880e7;
    
        &:hover {
            opacity: 0.7;
            color: #1880e7;
            transition: all .3s;
        }
    }
`;

const RequestTableHolder = ({requests, addRow}) => {
    return (
        <RequestsTableContainer>
            <TableHeading className="d-flex flex-row">
                <h2>Support Requests</h2>
                <LinkButton onClick={() => addRow()} className='highlighted'>add</LinkButton>
            </TableHeading>

            <RequestTable tableData={requests}/>
        </RequestsTableContainer>
    );
};

export default RequestTableHolder;
