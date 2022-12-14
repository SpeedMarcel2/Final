/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styled from "styled-components";
import { useEffect } from "react";

const NavContainer = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.text};

  position: absolute;

  width: 100vw;
  height: ${(props) => props.theme.navHeight};
  z-index: 500;

  @media (max-width: 48em) {
    height: 100vh;
    top: 0;

    bottom: 0;
    left: 0;
    right: 0;
    
  }


  .mobile{
    display: none;
    
  }

  @media (max-width: 48em){
    .mobile{
      display: inline-block;
    
  }

  
  .desktop{
    display: none;
  }
  }
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1rem 0;
  width: 50%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 50;
  transition: all 0.5s ease;

  a {
    font-weight: 100;

    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 64em) {
    width: 80%;
    right: 50%;
    transform: translateX(50%);
  }
  @media (max-width: 48em) {
   display: none;
    
  }
  
`;

const NavMobile = styled.nav`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1rem 0;
  width: 80%;

  display: none;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 50;
  transition: all 0.5s ease;

  a {
    font-weight: 100;

    text-decoration: none;
    color: inherit;
  }
  flex-direction: column;
    justify-content: center;

    background-color: transparent;
    top: 50%;
    left: ${props => props.click ? '50%' : "-100%"};
    transform: translate(-50%,-50%) !important;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.9)`};
padding: 2rem;
    a{
      margin: 1rem 0;
    }

 
  @media (max-width: 48em) {
    display: flex;
  }
  
`;

const HamburgerMenuContainer = styled.div`



position: absolute;
top: 1rem;
left: 1rem;
width: 3rem;
height: 3rem;
background-color: ${(props) => props.theme.body};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
@media (max-width: 48em){
  display: flex;
}

`

const HamburgerMenu = styled.button`
  background-color: ${(props) => props.theme.text};

  width: ${props => props.click ? '0' : '1.5rem'};


  cursor: pointer;

  height: 1px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  border: none;
  outline: none;
  transition: all 0.2s ease ;


  &::after {
    content: "";
    width: 1.5rem;
    height: 1px;
    display: inline-block;

    background-color: ${(props) => props.theme.text};
  transition: all 0.2s ease ;


    position: absolute;
    top: ${props => props.click ? '0rem' : "0.5rem"};
    transform: ${props => props.click ? 'rotate(45deg)' : "0"};

  }
  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background-color: ${(props) => props.theme.text};
  transition: all 0.2s ease ;

    display: inline-block;
    position: absolute;
    bottom: ${props => props.click ? '0rem' : "0.5rem"};
    transform: ${props => props.click ? 'rotate(-45deg)' : "0"};

  }
`;

const Btn = styled.a`
position: fixed;
top: 1rem;
  left: 2rem;
  z-index: 5;

background-color: ${props => props.theme.body};
padding: 1rem;
border: 1px solid ${props => `rgba(${props.theme.textRgba},0.5)`};
text-decoration: none;
color:inherit;
@media (max-width: 64em){
  top: 5rem;
  left: -5rem;
}
@media (max-width: 48em){
  position: relative;
  top: 0;
  left: 0;
}
`

const NavBar = ({ scroll }) => {
  // const { scroll } = useLocomotiveScroll();

  const [click, setClick] = useState(false);

  const handleMenuClick = () => {
    setClick(!click);
  }

  const handleClick = (id) => {
    const target = document.getElementById(id);
    scroll.scrollTo(target);
    handleMenuClick();
  };

  useEffect(() => {
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <NavContainer  click={click} >
    <HamburgerMenuContainer onClick={() => handleMenuClick()}>
    <HamburgerMenu  click={click}  />
   
    </HamburgerMenuContainer>
      <Nav click={click} data-scroll data-scroll-section>
      
        <a href="/#" onClick={() => handleClick("start")}>
          Start
        </a>
        <a href="/#" onClick={() => handleClick("vision")}>
          vision
        </a>

        <a href="/#" onClick={() => handleClick("about")}>
          About
        </a>
        <a href="/#" onClick={() => handleClick("how")}>
          How?
        </a>
        <a href="/#" onClick={() => handleClick("contact")}>
          Contact
        </a>
        <Btn className="mobile" href="https://47036a2c.ukm.pages.dev/" target={"_blank"} >
          Mint Now
        </Btn>
      </Nav>
      <NavMobile click={click}>
      
        <a href="/#" onClick={() => handleClick("start")}>
          Start
        </a>
        <a href="/#" onClick={() => handleClick("vision")}>
          vision
        </a>

        <a href="/#" onClick={() => handleClick("about")}>
          About
        </a>
        <a href="/#" onClick={() => handleClick("how")}>
          How?
        </a>
        <a href="/#" onClick={() => handleClick("contact")}>
          Contact
        </a>
        <Btn className="mobile" href="https://47036a2c.ukm.pages.dev/" target={"_blank"} >
          Mint Now
        </Btn>
      </NavMobile>
      <Btn className="desktop"  href="https://47036a2c.ukm.pages.dev/" target={"_blank"} >
          Mint Now
        </Btn>
    </NavContainer>
  );
};

export default NavBar;
