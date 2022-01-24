import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Nevtreh from './Nevtreh'
import Everything from "../components/Everything";
import { FontSizes } from "../components/FontSizes";
import Header from "../components/Header";
import Content from "../components/Content";
import Instructions from "../components/Instructions";
import Middle from "../components/Middle";

const Login = () => {
  return (
    <Everything>
      <Header>
        <Content>
          <FontSizes md>
            <Instructions>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Instructions>
          </FontSizes>
        </Content>
      </Header>

      <Middle>
        <Logo />
        <Nevtreh/>
      </Middle>
    </Everything>
  );
};

export default Login;
