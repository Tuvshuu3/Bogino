import styled from "styled-components";
import React from "react";
import { FontSizes } from "../components/FontSizes";

const Both = styled.div`
    width: 773px;
    height: 44px;
    display: flex;
    flex-direction: row;
    gap: 16px;
`

const SearchBar = styled.input`
    width: 581px;
    height: 44px;
    border: 1px solid #F0F0F0;
    border-radius: 100px;
    text-align: left;
    padding-left: 10px
`

const SearchBtn = styled.button`
    width: 192px;
    height: 44px;
    border-radius: 100px;
    background-color: #02B589;
    color: white;
    border: none;
    font-weight: 700;
`

const Search = () => {

    return (
        <Both>
            <SearchBar placeholder='https://www.web-huudas.mn'></SearchBar>
            
            <SearchBtn>
                <FontSizes md>
                    БОГИНОСГОХ
                </FontSizes>
            </SearchBtn>
            
        </Both>
    )
}

export default Search;