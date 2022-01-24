import React from "react";
import styled from "styled-components";


const Every_thing_N = styled.div`
  display: flex;
  flex-direction: column;
  width: 381px;
  height: 420px;
  gap: 32px
`;

const Everything_N = ({children}) => {
    return (
    <Every_thing_N>{children}</Every_thing_N>
    )
}

export default Everything_N;