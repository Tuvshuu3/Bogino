import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";

const Everything = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
`
const Header = styled.div `
  height: 156px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`

const Instructions = styled.div`

`

const Button = styled.button `
  width: ${(props) => props.w}px; 

  border-radius: 100px;
  background-color: #02B589;
  height: 44px;
  color: white;
  border: none;
`

const App = () => {

  return (
    <Everything>
      <Header>
        <Content>
          <Instructions>
              хэрхэн ажилладаг вэ?
          </Instructions>
          <Button w={183}> НЭВТРЭХ </Button>
        </Content>
      </Header>
      
      <Logo/>

    </Everything>
  );
}

export default App;
