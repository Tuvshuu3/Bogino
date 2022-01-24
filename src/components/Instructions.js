import React from "react";
import styled from "styled-components";


const Instructions1 = styled.div`
  color: #02b589;
  font-weight: 700;
`;


const Instructions = ({children}) => {
    return (
    <Instructions1>{children}</Instructions1>
    )
}

export default Instructions;