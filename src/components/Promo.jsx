import styled from "styled-components";

const Container = styled.div`
  background-color: #7851A7;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 12px;
  font-weight: 700;
`;

const Promo = () => {
  return (
    <Container>
      EXTRA 5% INSTANT DISCOUNT FOR ALL ONLINE PAYMENTS. FREE DELIVERY. FREE
      RETURNS.
    </Container>
  );
};

export default Promo;
