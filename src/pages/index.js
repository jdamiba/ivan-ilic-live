import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`;

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <img alt="a picture of ivan ilic" loading="lazy" src="https://ivan.jdamiba.now.sh/ivan6.JPG"/>
          <HeadingXL>
            2020 U.K. Tour
          </HeadingXL>
          <TextHome>
              <h3>March 15 - Neuadd Dyfi, Aberdovey</h3>
              <a href="https://thelittleboxoffice.com/neuadddyfi/book/event/118522">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <h3>March 17 - St. David's Hall, Cardiff</h3>
              <img alt="a picture of St. David's Hall, Cardiff" loading="lazy" src="https://www.stdavidshallcardiff.co.uk/media/4643/cpo-night-at-the-movies-75-25.jpg"/>
              <a href="https://mailtrack.io/trace/link/e97b851a96d9f5ab536177b2bd4cadbf9be269a8?url=https%3A%2F%2Fwww.stdavidshallcardiff.co.uk%2Fwhats-on%2Flunchtime-concerts-spring-2020%2Fivan-ili%25C4%2587%2F&userId=1068619&signature=592b41cfce63ed4c">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <h3>March 19 - St. George's, Bristol</h3>
              <img alt="a picture of St. George's, Bristol" loading="lazy" src="https://bristolopendoors.org.uk/wp-content/uploads/2018/07/St-Georges_3.jpg"/>
              <a href="https://mailtrack.io/trace/link/989464088a168d83d1ab21c975d6b9439c392327?url=https%3A%2F%2Fwww.stgeorgesbristol.co.uk%2Fevent%2Fivan-ilic%2F&userId=1068619&signature=d00b3e79624e05fa">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <h3>March 21 - Union Chapel, London</h3>
              <img alt="a picture of Union Chapel, London" loading="lazy" src="https://s0.geograph.org.uk/geophotos/05/98/95/5989538_a0f56d7b.jpg"/>
              <a href="https://mailtrack.io/trace/link/034e6c3bbb933518b82c4344f47072277b55f2e3?url=https%3A%2F%2Fwww.unionchapel.org.uk%2Fevent%2F21-03-2020-daylight-music%2F&userId=1068619&signature=4bdce43ef6fad32b">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <h3>March 22 - Rhosygilwen, Pembrokeshire</h3>
              <img alt="a picture of Rhosygilwen, Pembrokeshire" loading="lazy" src="https://s3.eu-west-2.amazonaws.com/wedding-booker-uploaded-photos/prod/baa20424bb18a7c7939e34385ab6596a7c844b7ee592c63f16d80c5ce97595b2/Rhos2.jpg.jpg"/>
              <a href="https://mailtrack.io/trace/link/57007d5be301d3a5b62a847e01b069c5811c292d?url=https%3A%2F%2Frhosygilwen.co.uk%2Fevents%2Fivan-ilic-piano%2F&userId=1068619&signature=27c418d65de10045">Buy Tickets</a>
          </TextHome>
        </Hero>
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
