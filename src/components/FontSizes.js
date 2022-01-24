import React from "react";
import styled from "styled-components";

export const FontSizes = styled.div`
    font-size: ${(props) => {
        if (props.md) {
            return "20";
        } else if (props.lg) {
            return "32";
        } else if (props.sm) {
            return "16";
        }
    }}px
`