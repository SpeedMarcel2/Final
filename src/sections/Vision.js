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
  z-index: 2;
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
          Our Community Goal is simple. We want a strong Community of people
          that values hard work, honesty, and loyalty.
        </Text>

        <Text>
          We want a Community of people believing in us, our vision, our Mindset
          to bring this Project as far as possible, this isn‘t Just a
          extraordinary new NFT Project, this is Just the start of something
          much bigger to Come. And you can be Part of That.
        </Text>

        <br />

        <Text>
        This Goal is incredibly Huge, to the point of being almost impossible. 
        And to achieve that, it does not only require multiple steps 
        in a specific sequence but also certain conditions to be met. 
        But the current time we live in and with opportunities like Web3, 
        make us one step closer to our Destination.
        </Text>
        <br />
        <Text>
          At the current stage, our NFT has 2 primary focuses: <br />
          <ol>
            <li> - Creating a Platform to educate on Web3</li>

            <li> - Building familiarity inside the network</li>
          </ol>
        </Text>
        <br />
        <Text>
         But sadly, in the NFT-Space, Artists had a great difficulty to establish themselves (especially smaller ones) 
         and we're drawing under a Flood of greedy and blind people, chasing bad Bored Ape Yachtclub and Azuki Imitations for a quick buck.
         But our Platform will change that. 
         It's a long process but the reward and potential is unimaginable. A platform that allows small artists in the NFT Space 
         to gain more Attention and Recognition they deserve.
         We believe on an artistic level, NFT offers a lot of potential, especially its future potential is tremendous.
         Digital Art has given the notion of “Art” a new meaning and almost a new definition. 
         And by creating a platform for the Space that is supportive of contemporary artists,
         particularly the smaller ones with neither Capital nor Attention, we can lay a foundation for future inspiration.<br />
          <ul>
            <li>Our Collection has a total of 500 NFTs</li>
            <li>
             If you like what you’ve read and are willing to go alongside us on this journey, we welcome you to UNKNOWN MEN.
            </li>

            <br/>
          <Text>The Future is in your Hands. Welcome to the Odessey of the Unknown Men.</Text>

          Before we talk about Phase 2, Phase 1 needs to have at least 80% completion rate.
          </ul>
        </Text>
      </Box>
    </Container>
  );
};

export default Vision;
