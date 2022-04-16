import React from "react";
import Group2 from "../images/Group-2.png";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <Nav>
      <div>
        <img src={Group2} alt="group" />
      </div>
      <List>
        <p>Quiz</p>
        <p>Be an ambassador</p>
        <p>Support</p>
      </List>
    </Nav>
  );
};
const Nav = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  img {
    width: 10rem;
    cursor: pointer;
  }
`;
const List = styled.div`
  margin-left: 10.5rem;
  display: flex;
  padding: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  & > * {
    margin-right: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      transform: translateY(-3px);
    }
  }
`;
export default NavBar;
