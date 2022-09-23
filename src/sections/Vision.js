/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import img1 from "../assets/boat-purple.jpg";

const Container = styled.div`
  width: 80vw;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem;
  position: relative;

  background-color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};
  color: ${(props) => props.theme.text};

  background-image: url(${img1});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 48em) {
    width: 100vw;
    padding: 0;
    min-height: 150vh;


  }

  @media (max-width: 25em) {
    min-height: 200vh;

  }

`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
  text-transform: uppercase;
  width: 100%;
`;

const SubTitle = styled.h1`
  font-size: ${(props) => props.theme.fontlg};
  text-align: left;
  font-weight: 300;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontmd};

    width: 90%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.7)`};
  z-index: 1;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;

  @media (max-width: 25em) {
    min-height: 100vh;
    height: 100%;

  }
`;

const Text = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: left;
  font-weight: 300;

  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  li {
    margin-left: 2rem;
  }

  @media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.5rem 0;
    width: 90%;
  }
`;

const Vision = () => {

  return (
    <Container data-scroll-section id="vision">
      <Overlay />
      <Box
        data-scroll
        data-scroll-speed={-1}
        data-scroll-direction={"verticle"}
      >
        <Title>Implementation</Title>

        <SubTitle>Community Goals</SubTitle>
        <br />

        <Text>
        Our Goal is incredibly Huge, to the point of being almost impossible. 
        And to achieve that, it does not only require multiple steps in a specific sequence, 
        but also certain conditions to be met.
        </Text>

        <Text>
        But the current day and age we live in, with things like Web3 created a great Window of opportunity 
        that provides us with a great Foundation, making the success of the project more probable.
        And you will be Part of That.
        </Text>

        <br />

        <Text>
        The first step on this journey is to use our NFT to build a strong network of competent 
        and capable people in various Areas of Life (financially, emotionally and mentally) 
        and to create a breeding ground for exceptional future Web3 businesses able to be foundational pillars of the next Generation.
        </Text>
        <br />
        <Text>
        And to create a platform purely for Digital Art, because Digital Art has given the notion of “Art” a new meaning 
        and almost a new definition, since its first appearance in the market.<br />
          <ol>
            <li> The Potential of this Industry is not only huge but also provides the World of Art 
              with a new level of diversity, attracting a new Audience of Art-lovers. </li>

            <li> And the NFT-Space is the best entry point for digital art to establish itself in the World.</li>
          </ol>
        </Text>
        <br />
        <Text>
         But sadly, in the NFT-Space, Artists had a great difficulty to establish themselves (especially smaller ones) 
         and were drawning under a Flood of greedy and blind people, chasing bad Bored Ape Yachtclub and Azuki Imitations for a quick buck.
        
        <Text>But our Platform will change that.</Text> 

         It's a long process but the reward and potential is unimaginable.
        
            
            <Text>Informations about our Project</Text>
            <br>
            <li>Our Collection has a total of 500 NFTs</li>
            <li>
            To know more about our NFT, the amount of NFT's we have and their price follow us on Twitter.
            </li></br>

            
          The Future is in your Hands. Welcome to the Odessey of the Unknown Men.

        </Text>
      </Box>
    </Container>
  );
};

export default Vision;
