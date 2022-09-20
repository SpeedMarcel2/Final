import React from "react";
import styled from "styled-components";
import img1 from "../assets/boat-yellow.jpg";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
height: auto;
  overflow: hidden;
  z-index: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  @media (max-width: 64em) {
 padding-bottom: 5rem;

}
`;

const Box = styled.div`
  width: 80%;
  height: 80vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
  flex-direction: column-reverse;
  min-height: 100vh;
  height: auto;

}
`;

const Left = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    width: 100%;

}
`;

const Right = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 100%;

}
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  text-align: center;
  font-weight: 300;
  margin-bottom: 2rem;
  text-transform: uppercase;
  align-self: flex-start;

`;




const Text = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  text-align: left;
  font-weight: 300;

  
@media (max-width: 70em) {
  font-size: ${(props) => props.theme.fontsm};

}
`;

const Start = () => {




  return (
    <Container data-scroll-section id="Start">
      <Box>
        <Right data-scroll data-scroll-speed="-1" >
        
          <Title >
        Welcome.
          </Title>
          <Text>
          We always wanted to be able to impact the World. 
          On a level where our names will be written in History books even multiple millennia later. 
          Leaving a legacy behind, that will provide humanity, our friends, and relatives with the Foundation for a bright Future. 
          Unicating with a big group of people. And you can be Part of That. 
          
          It sounds childish but at the same time, what is a Life without Dreams? 
          It's like drinking coke without carbonic acid, yeah it's Disgusting..
          </Text>
          <br />

          <Text>
          Our main priority for this NFT, is to develop a strong community before anything else. 
          We believe, especially in the current time we're in, that being alone is a fatal mistake.
          And we see it as our duty, to provide You with knowledge and value that not only is helpful in achieving our Goal, 
          but might also be a great Advice for you, in your Daily Life.
            <br />
          </Text>

          <br />

          <Title >Our wy?</Title>

          <Text>
          We are young and maybe naive, that can be true, we aren't perfect. 
          But what we do have is the passion and the commitment not only to our Goal, but also to you as the Community. 
          Because it's you who not only will bring this Project with us together to the Moon, 
          but also you that took your faith and believe, to support our Mission. 
          
          
          <Text>
          We're looking forward towards a great Future.</Text>
           <br />
          </Text>
        </Right>
        <Left data-scroll data-scroll-direction="horizontal">
          <img
            data-scroll
            data-scroll-speed="2"
            src={img1}
            alt="Unknown Men NFT"
          />
        </Left>
      </Box>
    </Container>
  );
};

export default Start;
