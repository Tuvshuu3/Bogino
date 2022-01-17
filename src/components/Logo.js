import React from "react";
import styled, { keyframes } from 'styled-components'
import Logo_Left from "../assets/Logo_Left.svg";
import Logo_Right from "../assets/Logo_Right.svg";
import Logo_Middle from "../assets/Logo_Middle.svg";

const Logo = () => {

    const rotate = keyframes`
  from {
    transform: 
  }

  to {
    
  }
`;
    
  const Logos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 3px;
  `;

  const Animation1 = styled.div`
    animation: ${rotate} 2s linear infinite; 
    position: relative;
  `

  const Animation2 = styled.div`
    animation: ${rotate} 2s linear infinite; 
    position: relative;
  `

  return (
    <Logos>
        <Animation1> <img src={Logo_Left}></img> </Animation1>
      <img style={{position: "relative", bottom: '2px'}} src={Logo_Middle}></img>
      <Animation2> <img src={Logo_Right}></img> </Animation2>
    </Logos>
  );
};

export default Logo;
