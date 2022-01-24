import React from "react";
import styled from "styled-components";

const LoginBtn1 = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: #02b589;
  color: white;
  border: none;
  font-weight: 700;
`;

const LoginBtn = ({children}) => {
    return (
    <LoginBtn1>{children}</LoginBtn1>
    )
}

export default LoginBtn;