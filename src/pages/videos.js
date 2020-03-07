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

const Videos = ({ data }) => {
  return (
    <>
      <SEO title="Videos" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Ivan Ilić Videos</HeadingXL>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/f0hN3aZXd68" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/mzUyhgevxvE" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/VAy1du-zC04" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/Z2xC3UDeTYo" frameborder="0" ></iframe>
       </div>

       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/wT7zTCa_RX0" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/Qnhg22HwZNU" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/QSHm3ZphFlk" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/UHpm49qSWBs" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/LJKy4QoZ8ak" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/h7brMH8tbzs" frameborder="0" ></iframe>
       </div>
       <div className="flexbox">
        <iframe  width="560" height="315" src="https://www.youtube-nocookie.com/embed/aImElXfcLAI" frameborder="0" ></iframe>
       </div>
       
        <Button href="mailto:bookivan@gmail.com">Get in touch!</Button>
      </Layout>
    </>
  );
};

export default Videos;
