import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';
import { BREAKPOINT } from '../utils/constants';

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <ButtonLink
        href="https://twitter.com/ivancdg?lang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </ButtonLink>
      <ButtonLink
        href="https://www.instagram.com/ivan_ilic_pianist/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </ButtonLink>
      <ButtonLink
        href="https://www.youtube.com/user/IvanCDGvideos"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </ButtonLink>
      <ButtonLink
        href="https://www.facebook.com/pages/Ivan-Ili%C4%87/190007957746747"
        target="_blank"
        rel="noopener noreferrer"
      >
        FaceBook
      </ButtonLink>
      <ButtonLink
        href="https://itunes.apple.com/us/artist/ivan-ilic/290009888"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple Music
      </ButtonLink>
      <ButtonLink
        href="https://open.spotify.com/artist/1JHZMkw7gYzNtvDZ2L9M75"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spotify
      </ButtonLink>
      <ButtonLink
        href="https://tidal.com/browse/artist/3957331"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tidal
      </ButtonLink>
      
      
      
    </Container>
  );
};
