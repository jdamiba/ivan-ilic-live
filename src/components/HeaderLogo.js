import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar } from '../components';
import { BREAKPOINT } from '../utils/constants';

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
  @media (max-width: ${BREAKPOINT}px) {
    padding-top: 30px;
    p {
      margin-right: 10px;
    }
  }
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;

export const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo>Ivan Ilić Live</Logo>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/videos">
        <p>Videos</p>
      </Link>
      <Link to="/recordings">
        <p>Recordings</p>
      </Link>
    </HeaderWrapper>
  );
};
