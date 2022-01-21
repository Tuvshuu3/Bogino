import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Nevtreh from '../components/Nevtreh'

const FontSizes = styled.div`
    font-size: ${(props) => (props.md ? "20px" : "30px")};
  }
`;

const Everything = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 156px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const Instructions = styled.div`
  color: #02b589;
  font-weight: 700;
`;

const Middle = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

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