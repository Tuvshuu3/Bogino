import React from "react";
import styled from "styled-components";


const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;



const Content = ({children}) => {
    return (
    <Content1>{children}</Content1>
    )
}

export default Content;