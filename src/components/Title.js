import React from "react";
import styled from "styled-components";


const Title1 = styled.div`
  width: 100%;
  color: #02b589;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;


const Title = ({children}) => {
    return (
    <Title1>{children}</Title1>
    )
}

export default Title;