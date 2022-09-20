import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/boat-blue.jpg';
import img2 from '../assets/singe-boat.jpg';



const Container = styled.div`
width: 100vw;
min-height: 150vh;
height: auto;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-align: center;
font-weight: 300;
margin: 2rem 0;
text-transform:uppercase;


position: absolute;
top: 2rem;
left: 50%;
transform: translateX(-50%);

@media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxl};
}
`


const Content = styled.div`
width: 80vw;
min-height:100vh;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 10rem 0;
margin-top: 15rem;
`

const Left = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: flex-start;
align-items: center;

@media (max-width: 48em){
  justify-content: center;
}
`
const Right = styled.div`
width: 100%;
height: 40vh;

display: flex;
justify-content: flex-end;
align-items: center;

@media (max-width: 48em){
  justify-content: center;
}
`
const Card = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding: 2rem;
position: relative;

@media (max-width: 48em){
  width: 70%;

}
@media (max-width: 25em) {
  width: 90%;
  height: 70%;

}
`
const SubTitle = styled.h2`
font-size: ${props => props.theme.fontlg};
text-align: center;
font-weight: 300;
margin: 2rem 0;
text-transform:uppercase;

z-index: 2;
@media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontmd};
}

`
const Text = styled.h2`
font-size: ${props => props.theme.fontmd};
text-align: center;
font-weight: 300;

z-index: 2;
@media (max-width: 25em) {
    font-size: ${(props) => props.theme.fontsm};
}
`

const ImgContainer = styled.div`
width: 100%;



img{
    width: 100%;
height: 100%;
    object-position: center center;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.6;
}
`

const CardComponent = ({subTitle, children}) => {
  return(
    <Card>
    
    <SubTitle>{subTitle}</SubTitle>
{children}
    </Card>
  )
}

const How = () => {
  return (
    <><Container data-scroll-section id="Welcome">
      <Title>How</Title>
      <Content>
        <Left data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">

          <CardComponent subTitle="Welcome">
            <ImgContainer>
              <img src={img1} alt="unknown men" />
            </ImgContainer>
            <Text>
              How to realize?
            </Text> <br />
            <Text>
            If you like what you’ve read and are willing to go alongside us on this journey..
            Ladies and Gentlemens welcome to:

            UNKNOWN MEN.
            </Text>
          </CardComponent>

        </Left>
        <Right data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
          <CardComponent subTitle="Path">
            <ImgContainer>
              <img src={img2} alt="unknown men" />
            </ImgContainer>
              <Text></Text>
              The odessey begins.
              <Text>
              Our Mojo:
            </Text> <br />
            <Text>
              "Those who plant the Seeds early are those that get rewarded the most. 
              The Future is in your Hands, you have the opportunities.
            </Text> <br />
            <Text>
              Pathing the way for the average to become exceptional.
              Succes or failure, you decide!
            </Text>
          </CardComponent>
        </Right>
      </Content>
    </Container>
    <mint button></mint><a href="https://ukm.pages.dev/" /></>
  )
}

export default How