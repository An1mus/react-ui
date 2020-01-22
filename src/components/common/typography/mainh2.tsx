import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.07rem;
  color: var(--main-font-color);
`;

interface Props {
    text: string;
}

const Heading2 = ({text}: Props) => {
    return (
        <Container>{text}</Container>
    )
};

export default Heading2;
