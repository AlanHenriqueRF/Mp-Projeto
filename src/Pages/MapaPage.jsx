import React from 'react';
import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import Mapa from '../Assets/mapa.jpg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapaManager = () => {
    return (
      <TransformWrapper>
        <TransformComponent>
          <img src={Mapa} alt="Zoomable Content" />
        </TransformComponent>
      </TransformWrapper>
    );
  };

export function MapaPage() {
    return (
        <>
            <Navbar />
            <Container>
                <Div>MAPA</Div>
                <ImageContainer>
                    <MapaManager></MapaManager>
                </ImageContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #ADD8E6;
    display: flex;
    flex-direction: column; // Adjusted to column for vertical stacking
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    height: 100vh;
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
        max-width: 90%; 
        // height: auto;
        margin: 0 auto; // Center the image
    }

    &:hover img {
        transform: scale(1.2); // Zoom on hover, adjust scale as needed
    }
`;
