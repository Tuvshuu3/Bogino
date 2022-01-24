import React from "react";
import styled from "styled-components";


const Every_thing = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


const Everything = ({children}) => {
    return (
    <Every_thing>{children}</Every_thing>
    )
}

export default Everything;