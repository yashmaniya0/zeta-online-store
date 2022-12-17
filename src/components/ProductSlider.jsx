import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const Arrow = styled.div`
  z-index: 2;
  height: 60px;
  width: 60px;
  margin: auto;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.1), -3px 0px 15px rgba(0, 0, 0, 0.1),
    0px 3px 15px rgba(0, 0, 0, 0.1), 0px -3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: -5vh;
  bottom: 0;
  opacity: 0.2;
  transition: all 0.5s;
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
  margin-top: 0px;
  height: 70vh;
  width: 100%;
  position: relative;

  &:hover ${Arrow} {
    opacity: 1;
  }
`;

const Title = styled.h1`
  padding: 0 32px;
`;

const ProductsContainer = styled.div`
  height: 58vh;
  margin: 20px 25px 0 25px;
  overflow: hidden;
`;

const Products = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  transform: translateX(${(props) => props.x * -92.5}vw);
  transition: all 1s ease;
`;

const Card = styled.div`
  height: 100%;
  margin: 0 10px;
`;

const Image = styled.img`
  display: flex;
  height: 80%;
  aspect-ratio: 97/120;
  cursor: pointer;
  object-fit: cover;
  object-position: 50% 0;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

const ProductName = styled.div`
  padding-right: 5px;
  cursor: pointer;
`;

const PriceContaniner = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  cursor: pointer;
`;

const Sp = styled.div`
  color: #37ac50;
`;

const Mrp = styled.div`
  color: rgb(180, 180, 180);
  text-decoration: line-through;
  font-weight: 400;
`;

const ProductSlider = (props) => {
  const [xscroll, setXscroll] = useState(0);

  function ScrollHandler(dir) {
    if (xscroll + dir < 0) return;
    if (xscroll + dir >= props.products.length / 5) setXscroll(0);
    else setXscroll(xscroll + dir);
  }

  return (
    <Container>
      <Title>{props.title}</Title>
      <ProductsContainer>
        <Products x={xscroll}>
          {props.products.map((item) => (
            <Card>
              <Image src={item.img} />
              <ContentContainer>
                <ProductName>
                  {item.title} {item.id}
                </ProductName>
                <PriceContaniner>
                  <Sp>₹{item.sp}</Sp>
                  <Mrp>₹{item.mrp}</Mrp>
                </PriceContaniner>
              </ContentContainer>
            </Card>
          ))}
        </Products>
      </ProductsContainer>
      <Arrow direction={1} onClick={() => ScrollHandler(1)}>
        <ArrowForwardIosOutlined style={{ fontSize: 25 }} />
      </Arrow>
      <Arrow direction={-1} onClick={() => ScrollHandler(-1)}>
        <ArrowBackIosOutlined style={{ fontSize: 25 }} />
      </Arrow>
    </Container>
  );
};

export default ProductSlider;
