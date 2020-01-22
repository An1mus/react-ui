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

const STUB_DATA = [{
    "name": "Cecilia Welch",
    "email": "heather_keeling@gottlieb.ca",
    "timestamp": "2012-04-23T01:06:43.511Z",
    "phoneNumber": "215-293-5846",
    "city": "Southe Mariane",
    "status": "sent"
}];

const RequestTable = ({data = STUB_DATA}) => {
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
                    {data.map((row, index) => (
                        <TableRow key={index} rowData={row}/>
                    ))}
                </tbody>
            </table>
        </RequestTableContainer>
    );
};

export default RequestTable;
