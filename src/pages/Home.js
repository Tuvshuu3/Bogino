import React, { useState } from "react";
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
import { useAuthContext } from "../providers/auth-context";
import LogOut from "../components/LogOut";

const Button = styled.button`
  width: ${(props) => props.w}px;

  border-radius: 100px;
  background-color: #02b589;
  height: 44px;
  color: white;
  border: none;
  font-weight: 700;
`;

const Logged = styled.div`
font-size: 20px;
font-style: normal;
font-weight: 700;
color: #000000;
display: flex;
flex-direction: row;
gap: 10px
`

const Home = () => {

  const { user } = useAuthContext(); 

  return (
    <Everything>
      <Header>
        <Content>
          <FontSizes md>
            <Instructions>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</Instructions>
          </FontSizes>

          {user.email ? <Logged>{user.email} <LogOut/></Logged> : 
            <Link to="/login">
              <Button w={183}>
                <FontSizes md>НЭВТРЭХ</FontSizes>
              </Button>
            </Link>
          }
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
