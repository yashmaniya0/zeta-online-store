import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fcf5f5;
  padding-bottom: 30px;
`;

const Title = styled.div`
  font-size: 60px;
`;

const Desc = styled.div`
  font-size: 25px;
`;

const Sender = styled.div`
  width: 35vw;
  height: 40px;
  display: flex;
`;

const Input = styled.input`
  padding-left: 20px;
  margin-right: 10px;
  width: 100%;
  flex: 8;
  letter-spacing: 0.5px;
  font-size: 16px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #0D80D8;
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <Sender>
        <Input placeholder="Enter your email"></Input>
        <Button>
          <Send />
        </Button>
      </Sender>
    </Container>
  );
};

export default Newsletter;
