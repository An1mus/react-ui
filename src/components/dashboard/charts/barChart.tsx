import React from 'react';
import styled from 'styled-components';

const BarChartContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 1.5rem;
    height: 12rem;
    
    .bar {
        background-color: ${props => props.color === 'blue' ? 'var(--main-blue-color)' : 'var(--main-pink-color)'};
    }
`;

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    
    &:nth-child(even) {
        .bar {
            opacity: 0.3;
            margin: 0 0.7rem;
        }
        
        .bar,
        p {
            margin-left: 0.8rem;
            margin-right: 0.8rem;
        }
    }
`;

const Bar = styled.div`
    border-radius: 0.2rem;
    height: ${props => props.height ? props.height : 2}rem;
    width: 1.2rem;
`;

const AxisMark = styled.p`
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    margin-top: 0.5rem;
    color: #8a96a0;
`;

interface Props {
    color: string;
}

const BarChart = ({color}: Props) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'o', 'l', 'm', 'n', 'o'];

    return (
        <BarChartContainer color={color}>
            {letters.map((letter, index) => (
                <BarContainer key={index}>
                    <Bar className={'bar'} height={Math.random() * 7 + 2}/>
                    <AxisMark>{letter}</AxisMark>
                </BarContainer>
                )
            )}
        </BarChartContainer>
    );
};

export default BarChart;
