import React from "react";
import styled from "styled-components";

const PasswordInput1 = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #f0f0f0;
  border-radius: 100px;
  text-align: left;
  padding-left: 10px;
  box-shadow: 0px 1px 5px 0px #00000029;
  padding-left: 16px;
`;


const PasswordInput = ({children}) => {
    return (
    <PasswordInput1>{children}</PasswordInput1>
    )
}

export default PasswordInput;