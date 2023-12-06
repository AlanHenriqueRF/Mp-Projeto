import { styled } from "styled-components";
import Navbar from "../Components/Navbar";
import cheeseBurguer from '../Assets/cheessBurgeuer.png'
import pasta from '../Assets/pasta.png'
import desert from '../Assets/desert.png'
import { useEffect } from "react";
import axios from "axios";

export function HomePage() {

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/usuarios')
            .then((data)=>{console.log(data.data)})
            .catch(err=>{console.log(err)})
    },[])
    return (
        <>
            <Navbar />
            <Container>
                <ul>
                    <Prato link={cheeseBurguer}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>DUPLO CHEEDAR</h1>
                            <h2>R$25,00</h2>
                        </div>
                        <button onClick={()=>{alert('Em contrução... Ira mostrar assunto sobre o lanche escolhido')}}>MAIS INFORMAÇÕES</button>
                    </Prato>
                    <Prato link={pasta}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>MAC CHEESE</h1>
                            <h2>R$20,00</h2>
                        </div>
                        <button onClick={()=>{alert('Em contrução... Ira mostrar assunto sobre o lanche escolhido')}}>MAIS INFORMAÇÕES</button>
                    </Prato>
                    <Prato link={desert}> {/* Esse prato deve ser uma componente que sera renderizada pleo dados que o back fornecerá */}
                        <div>
                            <h1>TORTA DOCE</h1>
                            <h2>R$10,00</h2>
                        </div>
                        <button onClick={()=>{alert('Em contrução... Ira mostrar assunto sobre o lanche escolhido')}}>MAIS INFORMAÇÕES</button>
                    </Prato>
                </ul>
            </Container>
        </>
    )
}


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