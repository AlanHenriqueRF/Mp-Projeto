import Navbar from "../Components/Navbar";
import React from "react";
import styled from "styled-components";

export function HistoricoPage(){
    return(
        <>
            <Navbar />
            <H1> Esse é o seu histórico de Buscas!</H1>
        </>
    )
}

const H1 = styled.h1`
    color: white;
    font-size: 40px;
    text-align:center;
    font-weight: bold;
`

export default HistoricoPage;
