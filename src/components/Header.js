import React from "react";
import styled from "styled-components";


const Header1 = styled.div`
  height: 156px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Header = ({children}) => {
    return (
    <Header1>{children}</Header1>
    )
}

export default Header;