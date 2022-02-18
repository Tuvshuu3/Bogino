import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../providers/auth-context";
import RSun from '../assets/RSun.png'
import RMoon from '../assets/RMoon.png'


const Header1 = styled.div`
  height: 156px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between
`;

const Toggle = styled.div`
  width: 69px;
  height: 69px;

`

const Header = ({children}) => {

  const { dark, setNightMode } = useAuthContext();

  return(
    <Header1>
      <Toggle onClick={setNightMode}>
        {dark ? <img style={{height: '100%'}} src={RMoon}/> : <img style={{height: '100%'}} src={RSun}/>}
      </Toggle>

      {children}
    </Header1>
  )
}


export default Header;