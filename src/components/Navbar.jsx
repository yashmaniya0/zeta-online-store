import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
`;

const SeachContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  margin-right: 5px;
  border: none;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin: 0 20px;
  transition: 0.25s;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SeachContainer>
            <Input />
            <Search />
          </SeachContainer>
        </Left>
        <Center>
          <Logo>ZETA STORE</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
