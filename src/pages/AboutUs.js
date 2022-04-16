import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../components/Nav";
//Images
import Gif from "../images/Gif.mp4";
import card from "../images/card.png";
import playstore from "../images/playstore.png";
import apple from "../images/apple.png";
import andela from "../images/Andela.png";
import konga from "../images/konga.png";
import teamapt from "../images/teamapt.png";
import sterling from "../images/sterling.png";
import secondcard from "../images/second-card.png";
import alt from "../images/alt.png";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../components/styles";
import Demystify from "../components/DemystifySec";
import BFooter from "../components/BFooter";
import Footer from "../components/Footer";
const AboutUs = () => {
  const [element, controls] = useScroll();

  const titleAnimation = {
    hidden: {
      y: 100,
    },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.75 },
    },
  };
  const fade = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transiton: { ease: "easeOut", duration: 0.75 },
    },
  };
  return (
    <div>
      <NavBar />
      <Hero>
        <div className="videoCard">
          <Video width="500" height="300" autoPlay loop muted>
            <source src={Gif} type="video/mp4" />
          </Video>

          <Card src={card} alt="" />
        </div>

        <Main>
          <motion.div variants={titleAnimation} initial="hidden" animate="show">
            <motion.h2 variants={fade}>The Right</motion.h2>

            <motion.h2 variants={fade}>card to keep</motion.h2>
            <motion.h2 variants={fade}>you smiling</motion.h2>
          </motion.div>
          <div className="paragraph">
            <p>Gen-Z’s are financially smarter, Join the</p>
            <p> clique. Save up and spend wisely.</p>
          </div>
          <FormStyle onsubmit=" return validate()">
            <div>
              <input
                type="text"
                id="number"
                placeholder="Enter your mobile number"
                required
              />
              <button type="submit">Get App</button>
            </div>
          </FormStyle>
          <DownloadStyle>
            <AppStyle>
              <img src={apple} alt="apple" />
              <p>
                Available on <br /> the Applestore
              </p>
            </AppStyle>
            <AppStyle>
              <img src={playstore} alt="" />
              <p>
                Get it on <br /> Googleplay
              </p>
            </AppStyle>
          </DownloadStyle>
        </Main>
      </Hero>
      <Affiliate>
        {/* Affilate Images */}
        <img className="img img-1" src={andela} alt="andlea" />
        <img className="img img-2" src={sterling} alt="sterling" />
        <img className="img img-3" src={alt} alt="alt" />
        <img src={teamapt} alt="" />
        <img src={konga} alt="" />
      </Affiliate>
      <Shop
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <motion.div className="shop">
          <motion.h2>Shop online</motion.h2>
          <motion.h2> with your </motion.h2>
          <motion.h2> GEN-T Card</motion.h2>
        </motion.div>
        <CardSecond>
          <img src={secondcard} alt="" />
        </CardSecond>
      </Shop>
      <Demystify />
      <BFooter />
      <Footer />
    </div>
  );
};
const Hero = styled(motion.div)`
  position: relative;

  background-color: rgb(57, 68, 155);
  padding: 4rem 5rem;
  width: 100%;
  .videoCard {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 48vw !important;
    height: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100% !important;
  object-fit: cover;
`;
const Card = styled(motion.img)`
  width: 18rem;
  position: absolute;
  top: 15rem;
  left: -8rem;
  z-index: 3;
  transition: all 1s;
  :hover {
    transform: scale(1.1) rotate3d(0, 1, 0, 180deg);
  }
`;

const Main = styled.div`
  width: 50vw;
  margin-top: 10rem;
  h2 {
    font-size: 4rem;
  }
  p {
    font-size: 1.4rem;
    font-weight: 300;
  }
  .paragraph {
    margin-top: 1rem;
  }
`;
const FormStyle = styled.form`
  margin-top: 1rem;

  input {
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    width: 40%;

    :focus {
      outline: none;
    }
  }
  button {
    background-color: #cb9cfa;
    color: #423d3d;
    padding: 1.094rem;
    font-size: 1rem;
    transform: translateY(-0.5px);
    margin-left: -3px;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    transition: all 0.2s;
    :hover {
      background-color: #a881cf;
    }
  }
`;
const DownloadStyle = styled.div`
  display: flex;
  margin-top: 2.2rem;
`;
const AppStyle = styled.div`
  cursor: pointer;
  display: flex;
  width: 32%;
  background-color: black;
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
  align-items: center;
  margin-right: 1rem;
  p {
    font-size: 1.1rem;
    font-weight: 400;
    padding-right: 1.5rem;
  }
  img {
    width: 2rem;
    height: 2.2rem;
    margin-right: 1rem;
  }
`;
const Affiliate = styled.div`
  background-color: #e8e1e0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1rem 15%;
  align-items: center;
  img {
    /* height: 3rem; */
  }
  .img {
    &-1,
    &-3 {
      height: 3rem;
    }
    &-2 {
      height: 5rem;
    }
  }
`;
const Shop = styled(motion.div)`
  background-color: #035672;
  width: 100%;
  display: flex;
  padding: 6rem 5rem;

  justify-content: space-between;
  .shop {
    width: 50%;
    align-self: center;
  }
  h2 {
    font-size: 4rem;
  }
`;
const CardSecond = styled.div`
  width: 50%;
  display: flex;

  img {
    width: 80%;
    transition: all 1s;
    margin-left: 4rem;
    border-radius: 1.2rem;
  }
  :hover {
    img {
      transform: scale(1.15) rotate3d(1, 0, 0, 360deg);
      box-shadow: 0 0 5rem rgba(0, 0, 0, 0.2);
    }
  }
`;

export default AboutUs;
