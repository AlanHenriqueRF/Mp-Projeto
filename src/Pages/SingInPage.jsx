
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import "../Styles/signIn-up.css"

export function SingInPage(){
    return (
    <>
        <Navbar />
        <form className="form">
            <h3>Entre com sua conta</h3>
            <input type="text" name="email" placeholder="Seu email"/>
            <input type="password" name="senha" placeholder="Sua senha" />
            <input type="submit" name="acao" value="Enviar" />
        </form>

        <footer className="footer">
            <div className="footer-content">
                <h4>Não tem conta? <Link to={"/SingUp"}>Registre-se</Link> </h4>
            </div>
            
        </footer>
        
    </>
    )
}
