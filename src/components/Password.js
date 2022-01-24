import React from "react";
import styled from "styled-components";

const Password1 = styled.div`
width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px`;


const Password = ({children}) => {
    return (
    <Password1>{children}</Password1>
    )
}

export default Password;