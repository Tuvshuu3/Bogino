import styled from "styled-components";
import React from "react";
import { FontSizes } from "../components/FontSizes";
import {useAuthContext} from '../providers/auth-context.js';


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

const Search = ({send, search, setSearch}) => {

    const changeFunction = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const { eng } = useAuthContext()

    return (
        <Both>
            <SearchBar type='text' value={search} onChange={changeFunction} placeholder='https://www.web-huudas.mn'></SearchBar>
            
            <SearchBtn onClick={send}>
                <FontSizes md>
                    {eng ? 'Shorten' : 'БОГИНОСГОХ'}
                </FontSizes>
            </SearchBtn>
            
        </Both>
    )
}

export default Search;