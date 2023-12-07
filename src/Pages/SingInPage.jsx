
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import "../Styles/signIn-up.css"
import { useEffect, useState } from "react"
import axios from "axios"

export function SingInPage() {
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()
    const [users, setUsers] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/usuarios')
            .then((data)=>{setUsers(data.data)})
            .catch((err)=>{console.log(err)})
    },[])

    function logar(e){
        e.preventDefault();
        const user = users.filter((i)=>{
            return (i.login === login.toLowerCase() && i.senha === senha)
        })
        if ( !user ){ //|| user[0].senha !== senha
            console.log('Não encontrado') //mostra algo para usuario
        }
        else{
            console.log('deuBOM')
            localStorage.setItem('id_usuario', user[0].id_usuario)
            navigate('/')
        }
    }
    return (
        <>
            <Navbar />
            <form className="form" onSubmit={(e)=>{logar(e)}}>
                <h3>Entre com sua conta</h3>
                <input type="email" name="email" placeholder="Seu email" required={true} value={login} onChange={(e)=>{ setLogin(e.target.value)}}/>
                <input type="password" name="senha" placeholder="Sua senha" required={true} value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>
                <button type="submit" name="acao" value="Enviar"> Logar </button>
            </form>

            <footer className="footer">
                <div className="footer-content">
                    <h4>Não tem conta? <Link to={"/SingUp"}>Registre-se</Link> </h4>
                </div>

            </footer>

        </>
    )
}
