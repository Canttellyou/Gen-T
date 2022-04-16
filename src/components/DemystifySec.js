import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useScroll } from "../components/useScroll";
import maroon from "../images/Maroon.png";
import { scrollReveal } from "../components/styles";
//Images
import zigzag from "../images/NoTradition.png";
import people from "../images/people.png";
import manHead from "../images/manHead.png";
import womanHead from "../images/womanHead.jpg";
const Demystify = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <DemystifyStyle
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div className="paragraph">
          <h2>
            Demystifing Bank Payment <br /> for young people
          </h2>
          <p>
            Banky empowers your customers to pay <br /> with their bank accounts
            without being taken away.
          </p>
        </div>
        <div className="payWith">
          <div className="demystifyDes">
            <h2>
              {" "}
              Pay with GEN-T, <br /> Fast and easy
            </h2>
            <p>
              Integrate Banky on your web-site to <br />
              offer fast, secure and seamless online <br />
              bank transfer payment method.
            </p>
          </div>
          <div className="demystifyImg">
            <img src={maroon} alt="" />
          </div>
          <motion.div className="zigzag">
            <img src={zigzag} alt="" />
          </motion.div>
        </div>
      </DemystifyStyle>
      <Interact>
        <People
          animate={{ y: "40px" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
          className="people-1"
        >
          <img src={womanHead} alt="" />
          <p>You paid Jane</p>
          <h2>$300</h2>
        </People>
        <People
          animate={{ y: "40px" }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
          className="people-2"
        >
          <img src={manHead} alt="" />
          <p>You paid Jack</p>
          <h2>$400</h2>
        </People>
      </Interact>
    </>
  );
};
const DemystifyStyle = styled(motion.div)`
  padding: 5rem;
  background-color: #fff;
  color: #232323;
  display: flex;
  flex-direction: column;
  .paragraph {
    text-align: center;
    h2 {
      font-size: 3.5rem;
      font-weight: 500;
      line-height: 1.2;
    }
    p {
      font-size: 1.2rem;
    }
  }
  .payWith {
    position: relative;
    align-self: center;
    display: flex;
    border-radius: 2rem;
    justify-content: space-between;
    padding: 4rem;
    background-color: #e8e1e0;
    width: 80%;
    margin-top: 15rem;
    .demystifyDes {
      h2 {
        margin-top: 1rem;
        line-height: 1.1;
        font-size: 2rem;
        font-weight: 500;
      }
      p {
        font-size: 1.3rem;
        margin-top: 0.7rem;
      }
    }
    .demystifyImg {
      width: 50%;
      display: flex;
      justify-content: end;
      img {
        width: 90%;
      }
    }
    .zigzag {
      position: absolute;
      top: -8rem;
      left: 40%;
      transition: all ease 2s;
    }
  }
`;
const Interact = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  background-size: cover;
  background-image: url(${people});
  .people-1 {
    background-color: white;
    color: #035672;
    left: 12%;
    top: 40%;
  }
  .people-2 {
    background-color: #035672;
    color: white;
    right: 8%;
    bottom: -2%;
  }
`;
const People = styled(motion.div)`
  width: 20%;
  padding: 1rem 4rem;
  border-radius: 1rem;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all ease 2s;
  img {
    width: 4rem;
    margin-bottom: 1rem;
  }
`;
export default Demystify;
