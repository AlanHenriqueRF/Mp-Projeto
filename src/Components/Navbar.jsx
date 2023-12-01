import { styled } from "styled-components"
import Logo from "../Assets/Logo_FF.png"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <Header>
                <LogoImage>
                    <Link to={'/'}><img src={Logo} alt="Logo Marca" /></Link>
                </LogoImage>

                <Links>
                    <Link to={'/Search'}>Buscar</Link>
                    <h2>|</h2>
                    <Link to={'/'}>Pratos do Dia</Link>
                    <h2>|</h2>
                    <Link to={"/Mapa"}>Mapa</Link>
                </Links>

                <Divsingin>
                    <Link to={"/SingIn"}>Login</Link>
                </Divsingin>

            </Header>
        </>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #010a26;
    font-family: 'Inter';
`

const LogoImage = styled.div`
    margin-left: 20px;
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 28px;
    a{
        font-size: 24px;
        font-weight: 800;
        text-decoration: none;
        color: #FFFFFF;
    }

    h2{
        color: #FFF;
        font-size: 24px;
        font-weight: 400;
        margin: 0 9px;
    }

    :nth-child(3){
        color: #F2B56B;
    }
`

const Divsingin = styled.div`
    margin-right: 59px;
    margin-top: 28px;
    a{
        color: #FFF;
        font-size: 24px;
        font-style: italic;
        font-weight: 700;
        letter-spacing: 1.92px;
        text-decoration: none;
    }
`