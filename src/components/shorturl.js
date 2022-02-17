import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../firebase";

const ShortUrl = () => {
    const { docId } = useParams();
    const { data } = useCollection("allurls")
    useEffect(() => {
        data.map((el) => 
            el.id === docId ? (window.location.href = el.url) : console.log("unlucky")
        );
    }, [data]);
    return <h1>LOADING...</h1>
}

export default ShortUrl