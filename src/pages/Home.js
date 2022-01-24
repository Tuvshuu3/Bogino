import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Everything from "../components/Everything";
import { FontSizes } from "../components/FontSizes";
import Header from "../components/Header";
import Content from "../components/Content";
import Instructions from "../components/Instructions";
import Middle from "../components/Middle";

const Button = styled.button`
  width: ${(props) => props.w}px;

  border-radius: 100px;
  background-color: #02b589;
  height: 44px;
  color: white;
  border: none;
  font-weight: 700;
`;

const Home = () => {
  return (
    <Everything>
      <Header>
        <Content>
          <FontSizes md>
            <Instructions>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Instructions>
          </FontSizes>

          <Link to="/login">
            <Button w={183}>
              <FontSizes md>НЭВТРЭХ</FontSizes>
            </Button>
          </Link>
        </Content>
      </Header>

      <Middle>
        <Logo />
        <Search />
      </Middle>
    </Everything>
  );
};

export default Home;
