import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
    background: var(--main-blue-color);
    border-radius: 0.4rem;
    color: var(--white-font-color);
    text-align: center;
    padding: 0.3rem 0;
    margin-top: 1.3rem;
    line-height: 1.5;
    width: 5rem;
`;

const Button = styled.button`
    background: var(--white-font-color);
    border-radius: 0.4rem;
    border: 0.2rem solid var(--main-blue-color);
    color: var(--main-blue-color);
    text-align: center;
    padding: 0.3rem 0;
    margin-top: 1.3rem;
    line-height: 1.5;
    width: 5rem;
    
    &:focus {
      outline: none;
    }
`;

const TableRow = ({rowData}) => {
    const {name, email, timestamp, phoneNumber, city, status} = rowData;
    return (
        <tr className='color-light'>
            <td className='color-regular'>{name}</td>
            <td>{email}</td>
            <td>{timestamp}</td>
            <td>{phoneNumber}</td>
            <td>{city}</td>
            <td>{status !== 'sent' ? <Label>Sent</Label> : <Button onClick={() => alert('Clicked')}>Send</Button> }</td>
        </tr>
    );
};

export default TableRow;
