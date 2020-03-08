import React from 'react';

import { Button, HeaderBack, HeadingXL, Layout, SEO } from '../components';

const Videos = () => {
  return (
    <>
      <SEO title="Videos" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Ivan Ilić Videos</HeadingXL>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/f0hN3aZXd68"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/mzUyhgevxvE"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/VAy1du-zC04"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Z2xC3UDeTYo"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/wT7zTCa_RX0"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Qnhg22HwZNU"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/QSHm3ZphFlk"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/UHpm49qSWBs"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/LJKy4QoZ8ak"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/h7brMH8tbzs"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="flexbox">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/aImElXfcLAI"
            frameBorder="0"
          ></iframe>
        </div>

        <Button href="mailto:bookivan@gmail.com">Get in touch!</Button>
      </Layout>
    </>
  );
};

export default Videos;
