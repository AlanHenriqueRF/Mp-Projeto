
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import "../Styles/signIn-up.css"
import { useState } from "react"
import Apiusuarios from "../service/usuarios"
import { styled } from "styled-components"
import ApiRestaurantes from "../service/restaurantes"

export function SingInPage() {
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()
    const [select, setSelect] = useState();
    const [erro,setErro] = useState()
    const navigate = useNavigate()

    

    function logar(e){
        e.preventDefault();
        let body;
        if (select != 'Restaurante'){
            body = {login,senha}
            Apiusuarios.login(body)
                .then((data)=>{
                    console.log(data)
                    localStorage.setItem('id_usuario', data.data.id_usuario)
                    localStorage.setItem('funcao', data.data.funcao)
                    navigate('/')})
                .catch(e=>{
                    setErro(
                        e.response.data)
                        console.log(e)})
        }
        else{
            body = {login,senha}
            ApiRestaurantes.loginrestaurante(body)
                .then((data)=>{
                    console.log(data)
                    localStorage.setItem('id_restaurante', data.data.id_restaurante)
                    localStorage.setItem('funcao', "Restaurante")
                    navigate('/')})
                .catch(e=>{
                    setErro(
                        e.response.data)
                        console.log(e)})
        }
    
    }
    return (
        <>
            <Navbar />
            <form className="form" onSubmit={(e)=>{logar(e)}} id="login">
                <h3>Entre com sua conta</h3>
                <input type="email" name="email" placeholder="Seu email" required={true} value={login} onChange={(e)=>{ setLogin(e.target.value)}}/>
                <input type="password" name="senha" placeholder="Sua senha" required={true} value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>

                <select form="login" onChange={(e)=>{setSelect(e.target.value)}}>
                    <option value="">Escolha uma opção</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Pessoa Fisica">Pessoa Fisica</option>
                </select>

                <button type="submit" name="acao" value="Enviar"> Logar </button>
                <Errormensage>{erro ? <>{erro}</> : <></>}</Errormensage>
            </form>

            

            
            <footer className="footer">
                <div className="footer-content">
                    <h4>Não tem conta? <Link to={"/SingUp"}>Registre-se</Link> </h4>
                </div>

            </footer>

        </>
    )
}


const Errormensage = styled.h1`
    color: red;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    margin-top: 20px;

`