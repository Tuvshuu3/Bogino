import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";

const App = () => {

  const Everything = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  return (
    <Everything>
      <Logo/>
    </Everything>
  );
}

export default App;
