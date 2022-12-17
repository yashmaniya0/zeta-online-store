import React, { useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";

const Arrow = styled.div`
  z-index: 2;
  height: 70px;
  width: 70px;
  margin: auto;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.03),
    -3px 0px 15px rgba(0, 0, 0, 0.03), 0px 3px 15px rgba(0, 0, 0, 0.03),
    0px -3px 15px rgba(0, 0, 0, 0.03);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 5vh;
  bottom: 0;
  opacity: 0;
  transition: 0.5s ease;
  left: ${(props) => {
    if (props.direction === -1) return "20px;";
  }};
  right: ${(props) => {
    if (props.direction === 1) return "20px;";
  }};

  &:hover{
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:hover ${Arrow} {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 0.7s ease;
  transform: translateX(${(props) => (props.slideIndex - 1) * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 40px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Slider = () => {
  const [slideIndex, setSlide] = useState(1);
  const nSlides = 3;

  function SlideHandler(direction) {
    if (direction === "1") {
      setSlide((slideIndex % nSlides) + 1);
    } else {
      if (slideIndex === 1) {
        setSlide(nSlides);
      } else {
        setSlide(slideIndex - 1);
      }
    }
    console.log(slideIndex);
  }

  return (
    <React.Fragment>
      <Container>
        <Arrow direction={-1} onClick={() => SlideHandler("-1")}>
          <ArrowBackIosOutlined style={{ fontSize: 25 }} />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img} alt={"Ad " + item.id} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction={1} onClick={() => SlideHandler("1")}>
          <ArrowForwardIosOutlined style={{ fontSize: 25 }} />
        </Arrow>
      </Container>
    </React.Fragment>
  );
};

export default Slider;
