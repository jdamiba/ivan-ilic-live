import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingXL = styled.h1`
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 5vh auto;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`;
