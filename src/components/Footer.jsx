import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  padding: 25px 0;
  background-color: rgb(50, 50, 50);
  color: white;
`;

const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin: 0 30px;
  height: 35vh;
  border-top: 2px solid white;
`;

const Title = styled.div`
  margin: 40px 0 20px 0;
  font-size: 18px;
`;

const ColumnContainer = styled.div`
  display: flex;

  & > div {
    margin-right: 20px;
    flex: 1;
  }
`;

const ListItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(180, 180, 180);
  padding: 5px 15px 5px 0;

  & > span {
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: white;
      transition: all 0.1s;
    }
  }
`;

const LowerWrapper = styled.div`
  border-top: 2px solid white;
  margin: 0 30px;
  display: flex;
  padding: 30px 0;
`;

const IconsContainer = styled.div`
  flex: 1;
`;

const Icon = styled.span`
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin: 5px;
  height: 15px;
  width: 35px;
  padding: 7px 5px;
  border-radius: 10%;
  background-color: white;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  margin-top: ${(props) => (props.height >= 100 ? -2 : 0)}px;
  height: ${(props) => props.height}%;
`;

const CopyrightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  & > div {
    width: 70%;
    margin: auto;
    font-weight: 400;
    font-size: 12px;
    color: rgba(180, 180, 180);
  }
`;

const Footer = () => {
  const Content = [
    {
      title: "Support",
      list: [
        [
          "Contact us",
          "FAQs",
          "Promotions & Sale",
          "My Account",
          "Track Order",
        ],
        [
          "Return Policy",
          "Privacy Policy",
          "Terms & Conditions",
          "Initiate Return",
        ],
      ],
    },
    {
      title: "About",
      list: [
        ["Company", "Corporate News", "Press Center", "Investors"],
        ["Sustainability", "Careers", "Store Finder"],
      ],
    },
  ];

  return (
    <Container>
      <UpperWrapper>
        {Content.map((item) => (
          <ContentContainer>
            <Title>{item.title}</Title>
            <ColumnContainer>
              <div>
                {item.list[0].map((innerItems) => (
                  <ListItem>
                    <span>{innerItems}</span>
                  </ListItem>
                ))}
              </div>
              <div>
                {item.list[1].map((innerItems) => (
                  <ListItem>
                    <span>{innerItems}</span>
                  </ListItem>
                ))}
              </div>
            </ColumnContainer>
          </ContentContainer>
        ))}
        <ContentContainer>
          <Title>Registered Office Address</Title>
          <ListItem>
            ZETA Store Private Ltd., Buildings Alyssa, Begonia & Clove Embassy
            Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </ListItem>
          <ListItem>CIN : U51109KA2012PTC066107</ListItem>
          <ListItem>
            Telephone: <span>044-45614700</span>
          </ListItem>
        </ContentContainer>
      </UpperWrapper>
      <LowerWrapper>
        <IconsContainer>
          <Icon>
            <Facebook style={{ fontSize: 40 }} />
          </Icon>
          <Icon>
            <Twitter style={{ fontSize: 40 }} />
          </Icon>
          <Icon>
            <Instagram style={{ fontSize: 40 }} />
          </Icon>
          <Icon>
            <LinkedIn style={{ fontSize: 40 }} />
          </Icon>
          <Icon>
            <YouTube style={{ fontSize: 40 }} />
          </Icon>
        </IconsContainer>
        <CopyrightContainer>
          <div>
            © ZETA Store India Ltd, 2022. All Rights Reserved. Imprint and Legal
            Data
          </div>
        </CopyrightContainer>
        <IconsContainer style={{ display: "flex", justifyContent: "flex-end" }}>
          <ImageContainer>
            <Image
              src="https://in.puma.com/assets/paymentLogos/visa.svg"
              height={90}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://in.puma.com/assets/paymentLogos/master.svg"
              height={120}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://in.puma.com/assets/paymentLogos/maestro.svg"
              height={120}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src="https://in.puma.com/assets/paymentLogos/americanexpress.svg"
              height={90}
            />
          </ImageContainer>
        </IconsContainer>
      </LowerWrapper>
    </Container>
  );
};

export default Footer;
