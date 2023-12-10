import React from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom'; // Adicionado o import do useParams
import Navbar from '../Components/Navbar';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Mapa from '../Assets/mapa/base.jpg';
import Seta0 from '../Assets/caminhos/0.png';
import Seta1 from '../Assets/caminhos/1.png';
import Seta2 from '../Assets/caminhos/2.png';
import Seta3 from '../Assets/caminhos/3.png';
import Seta4 from '../Assets/caminhos/4.png';
import Seta5 from '../Assets/caminhos/5.png';
import Seta6 from '../Assets/caminhos/6.png';
import Seta7 from '../Assets/caminhos/7.png';
import Seta8 from '../Assets/caminhos/8.png';
import Seta9 from '../Assets/caminhos/9.png';
import Seta10 from '../Assets/caminhos/10.png';
import Seta11 from '../Assets/caminhos/11.png';
import Seta12 from '../Assets/caminhos/12.png';
import Seta13 from '../Assets/caminhos/13.png';
import Seta14 from '../Assets/caminhos/14.png';
import Seta15 from '../Assets/caminhos/15.png';
import Seta16 from '../Assets/caminhos/16.png';
import Seta17 from '../Assets/caminhos/17.png';
import Seta18 from '../Assets/caminhos/18.png';

const MapaManager = styled.div``;


export function MapaPage() {
  const { argumento } = useParams(); // argumento da URL
  console.log(argumento);

    const imagens = {
        '0': Seta0,
        '1': Seta1,
        '2': Seta2,
        '3': Seta3,
        '4': Seta4,
        '5': Seta5,
        '6': Seta6,
        '7': Seta7,
        '8': Seta8,
        '9': Seta9,
        '10': Seta10,
        '11': Seta11,
        '12': Seta12,
        '13': Seta13,
        '14': Seta14,
        '15': Seta15,
        '16': Seta16,
        '17': Seta17,
        '18': Seta18,

    }

const novaseta = imagens[argumento];
console.log('novaseta', novaseta);
  return (
    <>
      <Navbar />
      <Container>
        <Div>MAPA</Div>
        <ImageContainer>
          <MapaManager>
            <TransformWrapper>
              <TransformComponent>
                <img src={Mapa} alt="" />
                <ImgUp src={novaseta} alt="" />
              </TransformComponent>
            </TransformWrapper>
          </MapaManager>
        </ImageContainer>
      </Container>
    </>
  );
}

const ImgUp = styled.img`
  position: absolute;
  left: 20%;
`;

const Container = styled.div`
  background-color: #add8e6;
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
     margin: 0 auto; // Center the image
   }
`;
