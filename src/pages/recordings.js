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

const Recordings = ({ data }) => {
  return (
    <>
      <SEO title="Store" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Ivan Ilić Recordings</HeadingXL>
        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/I/416cxO4BfTL.jpg" />
        <a href="https://www.amazon.com/Chopin-Studies-Ivan-Ilic/dp/B006JSXRAC/ref=ntt_mus_ep_dpi_1">
            <TextBody>
                Chopin Studies
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/I/71KcrpINOjL._SX522_.jpg" />
        <a href="https://www.amazon.com/Claude-Debussys-Preludes-Piano-Books/dp/B0019R40V8/ref=ntt_mus_ep_dpi_2">
            <TextBody>
            Claude Debussy's Preludes For Piano, Books 1 And 2
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://images-na.ssl-images-amazon.com/images/I/6193uNHIREL._SX522_.jpg" />
        <a href="https://www.amazon.com/Chopin-Studies-Ivan-Ilic/dp/B006JSXRAC/ref=ntt_mus_ep_dpi_1">
            <TextBody>
            Piano Masterworks
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://www.chandos.net/catalogueImages/CH10950.jpg" />
        <a href="https://www.chandos.net/products/catalogue/CHAN%2010950">
            <TextBody>
            Reicha Rediscovered, Volume 1
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://www.chandos.net/catalogueImages/CH20033.jpg" />
        <a href="https://www.chandos.net/products/catalogue/CHAN%2020033">
            <TextBody>
            Reicha Rediscovered, Volume 2
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://www.chandos.net/catalogueImages/CH20142.jpg" />
        <a href="https://www.chandos.net/products/catalogue/CHAN%2020142">
            <TextBody>
            Ivan Ilić Plays Haydn
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://files-doqueth5t.now.sh" />
        <a href="https://www.amazon.com/Transcendentalist-Ivan-Ilic-2013-08-03/dp/B01KATCNHI/">
            <TextBody>
            The Transcendentalist
            </TextBody>
        </a>
        </div>

        <div className="flexbox-col">
        <img width="230px" alt="a picture of ivan Ilić" loading="lazy" src="https://files-hjno6d4jb.now.sh" />
        <a href="https://www.amazon.com/Ivan-Ilic-plays-Morton-Feldman/dp/B014LGRA6K/">
            <TextBody>
            Ivan Ilić plays Morton Feldman -  For Bunita Marcus
            </TextBody>
        </a>
        </div>
        
        <Button href="mailto:bookivan@gmail.com">Get in touch!</Button>
      </Layout>
    </>
  );
};

export default Recordings;

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
