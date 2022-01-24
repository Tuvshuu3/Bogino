import React from "react";
import styled from "styled-components";


const Middle1 = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;


const Middle = ({children}) => {
    return (
    <Middle1>{children}</Middle1>
    )
}

export default Middle;