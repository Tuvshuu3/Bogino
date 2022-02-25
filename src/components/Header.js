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
  cursor: pointer
`

const ToggleEng = styled.div`
  width: 180px;
  height: 30px;
  cursor: pointer;
  font-size: 21px;
  font-weight: 900;
`
const Help = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center
`

const Header = ({children}) => {

  const { dark, setNightMode, eng, setEngMode } = useAuthContext();

  return(
    <Header1>
      <Help>
        <Toggle onClick={setNightMode}>
          {dark ? <img style={{height: '100%'}} src={RMoon}/> : <img style={{height: '100%'}} src={RSun}/>}
        </Toggle>

        <ToggleEng onClick={setEngMode}>
          {eng ? 'English' : 'Mongolia'}
        </ToggleEng>
      </Help>
     

      {children}
    </Header1>
  )
}


export default Header;