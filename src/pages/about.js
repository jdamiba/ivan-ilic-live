import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About Ivan Ilić</HeadingXL>
        <img alt="a picture of ivan ilic" loading="lazy" src="https://ivan.jdamiba.now.sh/ivan1.JPG" />
        <TextBody>
        Serbian American pianist Ivan Ilić (EE-van EE-litch) enjoys a unique place in today’s musical landscape thanks to his unconventional repertoire and multifaceted approach. By combining performing with writing, producing radio and video, and drawing upon key interdisciplinary experiences with visual art, acting, and the neuroscience of learning, he develops new audiences for unfamiliar music.
        </TextBody>
        <Button href="mailto:bookivan@gmail.com">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
