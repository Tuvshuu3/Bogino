import React from "react";
import styled from "styled-components";

const Email1 = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const Email = ({children}) => {
    return (
    <Email1>{children}</Email1>
    )
}

export default Email;