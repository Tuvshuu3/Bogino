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
import { useAuthContext } from "../providers/auth-context";


const Login = () => {

  const { dark, setNightMode, eng, setEngMode } = useAuthContext();

  return (
    <Everything style={{ backgroundColor: dark ? '#212121' : '#FFFFFF', transition: '2s'}}>
      <Header>
        <Content>
          <FontSizes md>
            <Instructions>{eng ? 'How Does It Work?' : 'ХЭРХЭН АЖИЛЛАДАГ ВЭ?'}</Instructions>
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
