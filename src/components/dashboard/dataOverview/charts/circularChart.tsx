import React from 'react';
import styled from 'styled-components';

const CircularChartContainer = styled.div`
    height: 15rem;
    width: 15rem;
    
    .circular-chart {
        display: block;
        margin: 1rem 0 1rem 2.8rem;
        max-width: 80%;
        max-height: 25rem;
    }
    
    .circle {
        stroke: ${props => props.color === 'blue' ? 'var(--main-blue-color)' : 'var(--main-pink-color)'};
        animation: progress 1s ease-out forwards;
    }
    
    .circle-bg{
        stroke: ${props => props.color === 'blue' ? 'var(--main-blue-color)' : 'var(--main-pink-color)'};
        animation: fadeIn 1s ease-out forwards;
    }
    
    .circle,
    .circle-bg{
        fill: none;
        stroke-width: 3.5;
        stroke-linecap: round;
    }
    
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.3;
        }
    }
    
    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
`;

const CircleChart = ({color}) => {
    return (
        <CircularChartContainer color={color}>
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                      strokeDasharray="100, 100"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                      strokeDasharray={(Math.random() * 30 + 50) + ", 100"}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
        </CircularChartContainer>
    );
};

export default CircleChart;
