import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
  height: 70vh;
  width: 100%;
  margin: 40px 0;
  display: flex;
  justify-contents: space-between;
  align-items: center;
`;

const Card = styled.div`
  margin: 0 5px;
  height: 100%;
  width: 100vw;
  display: flex;
  flex: 1;
  flex-direction: vertical;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 2;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

const Button = styled.button`
  margin: 15px;
  padding: 15px;
  font-size: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  cursor: pointer;
  transition: 0.5s;

  &:hover{
    background-color: white;
    transform: scale(1.1);
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Card>
          <Image src={item.img} />
          <ContentContainer>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </ContentContainer>
        </Card>
      ))}
    </Container>
  );
};

export default Categories;
