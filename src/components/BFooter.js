import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../components/styles";
import womanSit from "../images/woman-sit.png";
import dots from "../images/purpleDots.png";
const BFooter = () => {
  const [element, controls] = useScroll();

  return (
    <BFoot
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="image">
        <img src={womanSit} alt="" />
      </div>
      <div className="purple">
        <img src={dots} alt="" />
      </div>
      <div className="text">
        <h2>
          Shop online <br /> with your <br /> GEN-T Card
        </h2>
      </div>
    </BFoot>
  );
};
const BFoot = styled(motion.div)`
  margin-top: 30rem;
  display: flex;
  position: relative;
  justify-content: space-between;

  background-color: #035672;
  @media (max-width: 600px) {
    justify-content: stretch;
    margin-top: 20rem;
  }
  .image {
    img {
      top: -56%;
      left: 5rem;
      /* width: 37.5%; */
      position: absolute;
      z-index: 2;
      @media (max-width: 600px) {
        width: 17rem;
        top: -45%;
        left: 2.8rem;
      }
    }
  }
  .text {
    display: flex;
    align-items: center;
  }
  h2 {
    width: 100%;
    padding: 5rem;
    @media (max-width: 600px) {
      padding: 10rem 1rem;
    }
    padding-bottom: 45%;
    font-size: 3.5rem;
    font-weight: 500;
  }
  .purple {
    img {
      position: absolute;
      left: 36.2%;
      top: -20rem;
      z-index: 1;
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;
export default BFooter;
