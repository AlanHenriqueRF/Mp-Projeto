import React from 'react';
import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import Mapa from '../Assets/mapa/base.jpg';
import Seta from '../Assets/caminhos/5.png'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapaManager = styled.div `

`
   

export function MapaPage() {
    return (
        <>
            <Navbar />
            <Container>
                <Div>MAPA</Div>
                   <ImageContainer>
                   <MapaManager>
                        <TransformWrapper>
                            <TransformComponent>
                            <img src={Mapa} alt="Zoomable Content" />
                            <ImgUp src={Seta} alt="" />
                            </TransformComponent>
                        </TransformWrapper>
                    </MapaManager>
                   
                   </ImageContainer>
                    
            </Container>
        </>
    )
}
const ImgUp = styled.img `
    position: absolute;
    left: 20%;
`

const Container = styled.div`
    background-color: #ADD8E6;
    display: flex;
    flex-direction: column; // Adjusted to column for vertical stacking
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    height: 120vh;
    // Other styles...
`;

const Div = styled.div`
    margin-bottom: 20px; 
    font-size: 30px;
    
`;

const ImageContainer = styled.div`
    overflow: hidden; 
    cursor: grab; 
    img {
        

        transition: transform 0.55s ease;
        max-width: 60%; 
        // height: auto;
        margin: 0 auto; // Center the image
    }

`;
