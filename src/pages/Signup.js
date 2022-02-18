import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Burtguuleh from './Burtguuleh'
import Everything from "../components/Everything";
import { FontSizes } from "../components/FontSizes";
import Header from "../components/Header";
import Content from "../components/Content";
import Instructions from "../components/Instructions";
import Middle from "../components/Middle";
import { useAuthContext } from "../providers/auth-context";

const Signup = () => {

  const { dark, setNightMode } = useAuthContext();


  return (
    <Everything style={{ backgroundColor: dark ? '#212121' : '#FFFFFF', transition: '2s'}}>
      <Header>
      <div className="toggleDN">
          
        </div>
        <Content>
          <FontSizes md>
            <Instructions>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Instructions>
          </FontSizes>

        </Content>
      </Header>

      <Middle>
        <Logo />
        <Burtguuleh/>
      </Middle>
    </Everything>
  );
};

export default Signup;
