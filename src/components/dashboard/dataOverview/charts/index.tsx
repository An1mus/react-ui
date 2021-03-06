import React from 'react';
import styled from 'styled-components';
import BarChart from './barChart';
import CircleChart from './circularChart';

interface Props {
    title: string;
    followers: number;
    color: string;
}

const ChartsContainer = styled.div`
    display: flex;
    fex-direction: row;
    margin-top: 2.5rem;
    align-items: flex-start;
`;

const Followers = styled.span`
    font-size: 2.5rem;
    margin-right: 1.5rem;
`;

const BarChartContainer = styled.div`
`;

const ChartElement = ({title, followers, color}: Props) => {
    return (
        <>
            <h3>{title}</h3>

            <ChartsContainer>
                <BarChartContainer>
                    <p>
                        <Followers>{followers}</Followers>
                        <span className={'color-light'}>Followers</span>
                    </p>

                    <BarChart color={color}/>
                </BarChartContainer>

                <CircleChart color={color}/>
            </ChartsContainer>
        </>
    );
};

export default ChartElement;
