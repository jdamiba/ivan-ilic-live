import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = () => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About Ivan Ilić</HeadingXL>
        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan1.JPG"
        />
        <TextBody>
          Serbian-American pianist Ivan Ilić (EE-van EE-litch) enjoys a unique
          place in today&apos;s musical landscape thanks to his unconventional
          repertoire and multifaceted approach. By combining performing with
          writing, producing radio and video, and drawing upon key
          interdisciplinary experiences with visual art, acting, and the
          neuroscience of learning, he develops new audiences for unfamiliar
          music.
        </TextBody>

        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan2.JPG"
        />
        <TextBody>
          His eclecticism is reflected in his choice of musical projects, which
          range from the notoriously difficult{' '}
          <a href="https://en.wikipedia.org/wiki/Studies_on_Chopin%27s_%C3%89tudes">
            Chopin/Godowsky studies
          </a>
          , to the delicate abstraction of{' '}
          <a href="https://en.wikipedia.org/wiki/Morton_Feldman">
            Morton Feldman
          </a>
          , to his most recent enterprise: the rediscovery of music by
          Beethoven’s Czech friend and contemporary,{' '}
          <a href="https://en.wikipedia.org/wiki/Anton_Reicha">
            Antoine Reicha (1770-1836)
          </a>
          .
        </TextBody>

        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan3.JPG"
        />
        <TextBody>
          In 2016 he began focussing on Reicha’s neglected piano music, which he
          is recording in a 5-album series for{' '}
          <a href="https://www.chandos.net/list/artist/Ivan_Ilic/216758">
            Chandos Records
          </a>
          .{' '}
          <a href="https://www.chandos.net/products/catalogue/CHAN%2010950">
            Volume 1
          </a>{' '}
          of the Reicha Rediscovered series, supported by Swiss Radio RTS and
          the Palazzetto Bru Zane in Venice, led to a surge of interest in
          Reicha’s music. Editorial and reviews in the British, German, French,
          and Italian classical media raised the same question: how is it
          possible that such remarkable music by a friend of Beethoven, a
          student of Haydn, and the counterpoint teacher of Liszt, Berlioz,
          Franck and others, has never been recorded before? After the score
          languished in the French National Library for over 200 years, a piece
          from Volume 1 was listened to over 1,000,000 times on Apple Music.
          This led to a short documentary series about Reicha written and
          presented by Ilić, which in turn led to a widely-shared{' '}
          <a href="https://www.nytimes.com/2018/09/07/arts/music/anton-reicha-ivan-ilic-beethoven.html">
            feature story
          </a>{' '}
          in The New York Times.{' '}
          <a href="https://www.chandos.net/products/catalogue/CHAN%2010950">
            Volume 2
          </a>{' '}
          of the series was released in September 2018, with prominent media
          coverage in Germany, France, Luxembourg, the UK, the Netherlands,
          Switzerland, Korea and Australia. BBC Music Magazine wrote “In this
          pianist, Reicha’s music has the best possible advocate”.
        </TextBody>

        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan4.JPG"
        />
        <TextBody>
          Ilić earned degrees in mathematics and music at the University of
          California Berkeley before moving to Paris with a Hertz Fellowship. He
          then studied at the Conservatoire Supérieur de Paris, where he
          received a Premier Prix, and the Ecole Normale de Musique de Paris for
          postgraduate work. The City of Paris sponsored his first recording.
        </TextBody>

        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan5.JPG"
        />
        <TextBody>
          Early career highlights included recitals at Carnegie Hall, Wigmore
          Hall, Ireland&apos;s National Concert Hall, Toronto&apos;s Glenn Gould
          Studio, and the American Academy in Rome. He recently gave recital
          débuts in Vienna, Sao Paulo, Geneva, Montréal, and Amsterdam.
        </TextBody>

        <img
          alt="a picture of ivan Ilić"
          loading="lazy"
          src="https://ivan.jdamiba.now.sh/ivan7.JPG"
        />
        <TextBody>
          Recordings have played a significant role in spreading Ilić’s
          international recognition. His CD of{' '}
          <a href="https://www.amazon.com/Debussy-Preludes-Books-1-2/dp/B0019R40V8/ref=sr_1_1?qid=1583559826&refinements=p_32%3A+Ivan%5CcIlic&s=music&sr=1-1">
            24 Préludes by Claude Debussy [2008]
          </a>{' '}
          received Mezzo Television&apos;s Critic&apos;s Choice Award in France,
          and was a Top Five CD of the Year of Fanfare Magazine and Classique
          News. His next CD [2012] featured the complete{' '}
          <a href="https://www.amazon.com/Chopin-Studies-Ivan-Ilic/dp/B006JSXRAC/ref=ntt_mus_ep_dpi_1">
            Chopin Studies for the left hand by Leopold Godowsky
          </a>
          , a tour-de-force of musicianship and virtuosity. The recording was
          described as &apos;a major achievement&apos; and
          &apos;breathtaking&apos; by BBC Radio 3. It featured prominently in
          The Daily Telegraph [CD of the Week], German MDR Figaro [Top 5 CD],
          and Czech Radio [5 stars]. The album was broadcast widely across 6
          continents. Videos of Ivan Ilić performing Godowsky on YouTube
          attracted over 500,000 views. Shortly afterwards, he made his acting
          début in two French short films:{' '}
          <a href="https://www.youtube.com/watch?v=aImElXfcLAI">
            Luc Plissonneau&apos;s Les Mains
          </a>{' '}
          and Benoît Maire&apos;s Le Berger.
        </TextBody>

        <Button href="mailto:bookivan@gmail.com">Get in touch!</Button>
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
