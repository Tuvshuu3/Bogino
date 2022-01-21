import React from "react";
import styled, { keyframes } from 'styled-components'
import Logo_Left from "../assets/Logo_Left.svg";
import Logo_Right from "../assets/Logo_Right.svg";
import Logo_Middle from "../assets/Logo_Middle.svg";
import Boginoo from '../assets/Boginoo.svg'

const remove = keyframes`
0% {opacity: 1; width: 56px;}
100% { opacity: 0; width: 0;}
`;
    
const Logos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  gap: 3px;
  justify-content: center;
  margin-right: 12px;
`

const Animation = styled.div`
  animation: ${remove} 0.5s 2s linear 1; 
  animation-fill-mode: forwards;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: 3px;
`
const AllOfLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`


const Logo = () => {

  return (
    <AllOfLogo>
      <Logos>
        <img style={{position: "relative", left: '18px'}} src={Logo_Left}></img>
        <Animation>
          <img src={Logo_Middle}></img>
          <img src={Logo_Middle}></img>
        </Animation>
        <img src={Logo_Right}></img>
      </Logos>
        <img src={Boginoo}></img>
    </AllOfLogo>
    
  );
};

export default Logo;
