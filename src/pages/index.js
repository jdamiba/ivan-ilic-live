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
          <img alt="a picture of ivan Ilić" loading="lazy" src="https://ivan.jdamiba.now.sh/ivan6.JPG"/>
          <HeadingXL>
            2020 U.K. Tour
          </HeadingXL>
          <TextHome>
              <div className="concert-date">March 15 - Neuadd Dyfi, Aberdovey</div>
              <a href="https://thelittleboxoffice.com/neuadddyfi/book/event/118522">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <div className="concert-date">March 17 - St. David's Hall, Cardiff</div>
              <img alt="a picture of St. David's Hall, Cardiff" loading="lazy" src="https://www.stdavidshallcardiff.co.uk/media/4643/cpo-night-at-the-movies-75-25.jpg"/>
              <a href="https://mailtrack.io/trace/link/e97b851a96d9f5ab536177b2bd4cadbf9be269a8?url=https%3A%2F%2Fwww.stdavidshallcardiff.co.uk%2Fwhats-on%2Flunchtime-concerts-spring-2020%2Fivan-ili%25C4%2587%2F&userId=1068619&signature=592b41cfce63ed4c">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <div className="concert-date">March 18 - Royal Welsh College of Music and Drama, Cardiff (2 - 5pm)</div>
              <img alt="a picture of St. David's Hall, Cardiff" loading="lazy" src="https://files-cjcvldep1.now.sh"/>
             Open To The Public
          </TextHome>
          <TextHome>
              <div className="concert-date">March 19 - St. George's, Bristol</div>
              <img alt="a picture of St. George's, Bristol" loading="lazy" src="https://bristolopendoors.org.uk/wp-content/uploads/2018/07/St-Georges_3.jpg"/>
              <a href="https://mailtrack.io/trace/link/989464088a168d83d1ab21c975d6b9439c392327?url=https%3A%2F%2Fwww.stgeorgesbristol.co.uk%2Fevent%2Fivan-ilic%2F&userId=1068619&signature=d00b3e79624e05fa">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <div className="concert-date">March 21 - Union Chapel, London</div>
              <img alt="a picture of Union Chapel, London" loading="lazy" src="https://s0.geograph.org.uk/geophotos/05/98/95/5989538_a0f56d7b.jpg"/>
              <a href="https://mailtrack.io/trace/link/034e6c3bbb933518b82c4344f47072277b55f2e3?url=https%3A%2F%2Fwww.unionchapel.org.uk%2Fevent%2F21-03-2020-daylight-music%2F&userId=1068619&signature=4bdce43ef6fad32b">Buy Tickets</a>
          </TextHome>
          <TextHome>
              <div className="concert-date">March 22 - Rhosygilwen, Pembrokeshire</div>
              <img alt="a picture of Rhosygilwen, Pembrokeshire" loading="lazy" src="https://s3.eu-west-2.amazonaws.com/wedding-booker-uploaded-photos/prod/baa20424bb18a7c7939e34385ab6596a7c844b7ee592c63f16d80c5ce97595b2/Rhos2.jpg.jpg"/>
              <a href="https://mailtrack.io/trace/link/57007d5be301d3a5b62a847e01b069c5811c292d?url=https%3A%2F%2Frhosygilwen.co.uk%2Fevents%2Fivan-ilic-piano%2F&userId=1068619&signature=27c418d65de10045">Buy Tickets</a>
          </TextHome>

          <div style={{textAlign:"center"}} className="concert-date">Latest Instagram Posts</div>

          <div className="flexbox">

          <div dangerouslySetInnerHTML={{__html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;">  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> </div></div> <div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> <img class="insta" src="https://instagram.com/p/B9b80RhF9KW/media/?size=l"/></div></div><div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#concentrate 📸 George Gobel for AFP _ _ _ _ #Piano #Musician #Instapiano #Music #piano #Pianoplayer #Keyboard #France #Pianoforte #Pianokeys #Pianomusic #classicalpiano #classicalmusic #classicalpianist #backstage #pianist #pianiste #klavier #instagood #repertoire #pleyel #1930 #home #me #portrait</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/ivan_ilic_pianist/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> IVAN ILIĆ</a> (@ivan_ilic_pianist) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-03-05T18:14:23+00:00">Mar 5, 2020 at 10:14am PST</time></p></div></blockquote>`}}/>
          </div>

          <div className="flexbox">

          <div dangerouslySetInnerHTML={{__html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;">  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> </div></div> <div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> <img class="insta" src="https://instagram.com/p/B9XJOGJnIu9/media/?size=l"/></div></div><div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#concentrate 📸 George Gobel for AFP _ _ _ _ #Piano #Musician #Instapiano #Music #piano #Pianoplayer #Keyboard #France #Pianoforte #Pianokeys #Pianomusic #classicalpiano #classicalmusic #classicalpianist #backstage #pianist #pianiste #klavier #instagood #repertoire #pleyel #1930 #home #me #portrait</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/ivan_ilic_pianist/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> IVAN ILIĆ</a> (@ivan_ilic_pianist) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-03-05T18:14:23+00:00">Mar 5, 2020 at 10:14am PST</time></p></div></blockquote>`}}/>
          </div> 

          <div className="flexbox">

          <div dangerouslySetInnerHTML={{__html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:400px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;">  <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> </div></div> <div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> <img class="insta" src="https://instagram.com/p/B9TjlcPofbc/media/?size=l"/></div></div><div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/B9XJOGJnIu9/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">#concentrate 📸 George Gobel for AFP _ _ _ _ #Piano #Musician #Instapiano #Music #piano #Pianoplayer #Keyboard #France #Pianoforte #Pianokeys #Pianomusic #classicalpiano #classicalmusic #classicalpianist #backstage #pianist #pianiste #klavier #instagood #repertoire #pleyel #1930 #home #me #portrait</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/ivan_ilic_pianist/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> IVAN ILIĆ</a> (@ivan_ilic_pianist) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-03-05T18:14:23+00:00">Mar 5, 2020 at 10:14am PST</time></p></div></blockquote>`}}/>
          </div>  

                  
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
