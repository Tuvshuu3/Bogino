import React from "react";
import styled from "styled-components";

const PasswordName1 = styled.div`
  font-weight: 400;
  padding-left: 15px;
`;


const PasswordName = ({children}) => {
    return (
    <PasswordName1>{children}</PasswordName1>
    )
}

export default PasswordName;