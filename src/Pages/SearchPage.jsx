import { styled } from "styled-components";
import Navbar from "../Components/Navbar";

export function SearchPage(){
    return (
    <>
        <Navbar/>

        <Div>Ta no search, EM CONSTRUÇÃO...</Div>
    </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 132px);
    font-size: 32px;
    font-weight: 600;
`