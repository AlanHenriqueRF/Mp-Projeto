import React,{ useState } from 'react';
import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import cheeseBurguer from '../Assets/cheessBurgeuer.png'
import pasta from '../Assets/pasta.png'
import desert from '../Assets/desert.png'
//import { useEffect } from "react";
//import axios from "axios";

export function HomePage() {
    const [showDetails,setShowDetails] = useState(false);
    const handleDetailsClick = () => {
        setShowDetails(true);
    }
    const handleCloseClick=() => {
        setShowDetails(false);
    }
    return (
        <>
            <Navbar />
            <Container>
                <ul>
                    <Prato link={cheeseBurguer} onClick={handleDetailsClick}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>DUPLO CHEEDAR</h1>
                            <h2>R$25,00</h2>
                        </div>
                        <button >MAIS INFORMAÇÕES</button>
                    </Prato>
                    <Prato link={pasta} onClick={handleDetailsClick}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>MAC CHEESE</h1>
                            <h2>R$20,00</h2>
                        </div>
                        <button >MAIS INFORMAÇÕES</button>
                    </Prato>
                    <Prato link={desert} onClick={handleDetailsClick}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>TORTA DOCE</h1>
                            <h2>R$10,00</h2>
                        </div>
                        <button >MAIS INFORMAÇÕES</button>
                    </Prato>
                </ul>
            </Container>
            {showDetails&&(
                <DetailsMenu>

                    <h1>Cheese Burger Magnifico</h1>
                    <Prato link={desert} onClick={handleDetailsClick}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>TORTA DOCE</h1>
                            <h2>R$10,00</h2>
                        </div>
                    </Prato>
                    <h2>Descição do Carlinhos</h2>
                    <Button_localizar>Localizar</Button_localizar>
                    <Button_close onClick={handleCloseClick}>X</Button_close>
                </DetailsMenu>
            )}
        </>
    )
}

const DetailsMenu = styled.div`

  position: fixed;
  top: 400px;
  width: 500px;
  height: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 500;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid red; /* Add a red border */

  a {
    font-weight: 800; /* Changed to bold */
    font-size: 64px; /* Changed to size 64 */
    color: #000; /* Adjusted text color */
    text-decoration: none; /* Remove underline */
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    max-height: 200px;
    margin-bottom: 0px;
    border-radius: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
const Button_close = styled.button`
    position: absolute;
    cursor:pointer;
    right: 0px;
    top: 15px;
    background-color: #FFF;
    padding: 12px 24px;
    color: black;
    font-size: 24px;
    font-weight: bolder;
    border: none;
`
const Button_localizar = styled.button`
    background-color: #1BF28E;
    padding: 12px 24px;
    border: 0;
    border-radius: 20px;
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.2px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #18c27d;
    }
`
//const H1 = styled.div``


const Container = styled.div`
    background-color: #010A26;
    display: flex;
    height: calc(100vh - 136px);
    align-items: center;
    justify-content: center;
    font-family: 'Inter';
    ul{
        height: 262px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
`

const Prato = styled.li`
    div{
        background-image: url(${props => props.link});
        width: 332px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-weight: 800;
        font-size: 24px;
        letter-spacing: 1.92px;

        h1{
            color: #ffffff;
            margin-top: 24px;
        }
        h2{
            color:#FFE600;
            margin-bottom: 21px;
        }

    }

    button{
        width: 100%;
        background-color: #1BF28E;
        height: 62px;
        border: 0;
        border-radius: 0px 0px 20px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 1.92px;
    }
    
`