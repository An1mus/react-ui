import React from 'react';
import styled from 'styled-components';
import TableRow from './tableRow';

const RequestTableContainer = styled.div`
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 1.3rem;
    
    thead tr, 
    thead th,
    tr, th, td {
        border: 0;
    }
    
    tbody tr td{
        box-sizing: border-box;
        line-height: 5rem;
    }

    thead tr th {
        color: var(--lighter-font-color);
        font-size: 1.1rem;
        text-transform: uppercase;
    }
`;

const RequestTable = ({tableData, sendEmail}) => {
    const TableFields = ['Name', 'Email', 'Time', 'Phone number', 'City', 'Status'];

    return (
        <RequestTableContainer className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        {TableFields.map((el, i) => (<th key={i} scope="col">{el}</th>))}
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, index) => (
                        <TableRow key={index} rowData={row} sendEmail={sendEmail}/>
                    ))}
                </tbody>
            </table>
        </RequestTableContainer>
    );
};

export default RequestTable;
