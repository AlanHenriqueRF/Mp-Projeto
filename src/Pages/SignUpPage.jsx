import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom"
import Apiusuarios from "../service/usuarios";

export function SingUpPage() {
    const [showRestaurantFields, setShowRestaurantFields] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [url, setUrl] = useState('')
    const [latitude, SetLatitude] = useState(0)
    const [longitude, SetLongitude] = useState(0)
    const navigate = useNavigate()

    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        setShowRestaurantFields(selectedRole === "Restaurante");
    }

    let nome = "Seu nome"
    if (showRestaurantFields) {
        nome = "Nome do restaurante"
    }

    function cadastrar(e){
        e.preventDefault();
        let body;

        if (!showRestaurantFields){
            body = {nome_usuario: name, login: email, senha, funcao: showRestaurantFields ?  "Restaurante": "Pessoa Fisica"} 
            console.log(body)
            Apiusuarios.cadastro(body)
                .then((data)=>{navigate('/SingIn')})
                .catch(e=>{console.log(e)})
            }
        }
    return (
        <>
            <Navbar />

            <form className="form" onSubmit={(e)=>{cadastrar(e)}}>
                <h3>Se cadastre</h3>
                <input type="text" name="nome" placeholder={nome} value={name} onChange={(e)=>{ setName(e.target.value)}} required/>
                <input type="text" name="email" placeholder="Seu email" value={email} onChange={(e)=>{ setEmail(e.target.value)}} required />
                <input type="password" name="senha" placeholder="Sua senha" value={senha} onChange={(e)=>{ setSenha(e.target.value)}}  required/>

                {showRestaurantFields && (
                    <>
                        <input type="url" name="image" placeholder="Link da imagem" value={url} onChange={(e)=>{ setUrl(e.target.value)}}  />
                        <input type="text" name="latitude" placeholder="Latitude" value={latitude} onChange={(e)=>{ SetLatitude(e.target.value)}}  />
                        <input type="text" name="longitude" placeholder="Longitude" value={longitude} onChange={(e)=>{ SetLongitude(e.target.value)}}  />
                    </>
                )}

                <h4>Função</h4>
                <select name="funcao" onChange={handleRoleChange}>
                    <option value="">Escolha uma opção</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Pessoa Fisica">Pessoa Fisica</option>
                </select>

                <button type="submit" name="acao" value="Enviar">Cadastrar</button>

            </form>

            <footer className="footer">
                <div className="footer-content">
                    <h4>Já tem conta? <Link to={"/SingIn"}>Faça Login</Link> </h4>
                </div>

            </footer>

        </>
    )
}