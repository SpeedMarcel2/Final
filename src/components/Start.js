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
    <Container data-scroll-section id="start">
      <Box>
        <Right data-scroll data-scroll-speed="-1" >
        
          <Title >
        Welcome
          </Title>
          <Text>
          This is Just the start of "something" much bigger to Come. And you can be Part of That.
          Web 3 offers a new way of working and communicating with a big group of people. And you can be Part of That. 
          Hop in on our Journey towards a better future.
          
          </Text>
          <br />

          <Text>
          Our opinion is that the Community is the ultimate Foundation for new,
          innovative, and extraordinary ideas. That’s why the community has
          an indispensable place on our journey towards a new Future.
            <br />
          </Text>

          <br />

          <Text>
          Ladies and Gentlemens,
          
          welcome to: UNKNOWN MEN. <br />
          </Text>
          <br />
          <Title >why?</Title>

          <Text>
          We always wanted to be able to impact the World. 
          On a level where our names will be written in History books even multiple millennia later. 
          Leaving a legacy behind, that will provide humanity, our friends, 
          and relatives with the Foundation for a bright Future. 
          It sounds childish but it’s just something that motivates 
          us every single day to improve and to keep moving forward.

          <Text>
          In our opinion is a strong communy the ultimate breeding ground for new, 
          innovative, and extraordinary ideas. 
          Because a extraordinary and strong Community is the Foundation to achieve extraordinary results, 
          in almost every area of Life.</Text>
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
