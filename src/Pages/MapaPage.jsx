import { styled } from "styled-components"
import Navbar from "../Components/Navbar"
import mapa from "../Assets/mapa.jpg"

export function MapaPage() {
    return (
        <>
        <Navbar />
            <Div mapa={mapa}>
            </Div>
        </>
    )
}


const Div = styled.div`
    background-image: url(${props => props.mapa});
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 132px;
    width: calc(100vw - 60px);
    font-size: 32px;
    font-weight: 600;
`