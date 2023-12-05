import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom"

export function SingUpPage() {
    const [showRestaurantFields, setShowRestaurantFields] = useState(false);

    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        setShowRestaurantFields(selectedRole === "Restaurante");
    }

    return (
        <>
            <Navbar />

            <form className="form">
                <h3>Se cadastre</h3>
                <input type="text" name="nome" placeholder="Seu nome" />
                <input type="text" name="email" placeholder="Seu email" />
                <input type="password" name="senha" placeholder="Sua senha" />

                {showRestaurantFields && (
                    <>
                        <input type="text" name="latitude" placeholder="Latitude" />
                        <input type="text" name="longitude" placeholder="Longitude" />
                    </>
                )}

                <h4>Função</h4>
                <select name="Função" onChange={handleRoleChange}>
                    <option value="">Escolha uma opção</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Pessoa Fisica">Pessoa Fisica</option>
                </select>

                <input type="submit" name="acao" value="Enviar" />

            </form>

            <footer className="footer">
                <div className="footer-content">
                    <h4>Já tem conta? <Link to={"/SingIn"}>Faça Login</Link> </h4>
                </div>

            </footer>

        </>
    )
}