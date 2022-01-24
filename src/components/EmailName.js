import React from "react";
import styled from "styled-components";

const EmailName1 = styled.div`
  font-weight: 400;
  padding-left: 15px
`;


const EmailName = ({children}) => {
    return (
    <EmailName1>{children}</EmailName1>
    )
}

export default EmailName;