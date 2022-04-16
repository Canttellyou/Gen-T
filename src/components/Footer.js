import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "../components/useScroll";
import { scrollReveal } from "../components/styles";
import BFooter from "../images/Footer.png";
const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <Foot
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="footImg">
        <img src={BFooter} alt="" />
      </div>
    </Foot>
  );
};
const Foot = styled(motion.div)`
  margin-top: 5rem;
  padding: 5rem;
  .footImg {
    width: 100%;
    img {
      width: 100%;
    }
  }
`;
export default Footer;
