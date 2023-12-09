import styled from "styled-components";
import Navbar from "../Components/Navbar";

export function AdminPage() {
  return (
    <>
    <Navbar />
      <Containerdiv>
        <H1>Essa é a adminPage</H1>
        <H2>Aqui há apenas admins</H2>
        <input placeholder="Adicionar um novo restaurante"></input>
        <Button>Adicionar um novo lote de restaurante</Button>
        <input placeholder="Excluir um restaurante já existente"></input>
        <Button>Excluir um lote de restaurante</Button>
        <input placeholder="Adicionar um prato do dia"></input>
        <Button>Adicionar um prato do dia</Button>
        <Button>Verificar lista de pratos vendidos</Button>
        
      </Containerdiv>
    </>
  );
}

const Containerdiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  font-family: 'Inter';
`;

const H1 = styled.h1`
  font-size: 80px;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: red;
  font-size: 50px;
  font-style: italic;
`;

const Input = styled.input`
  width: 3000px; /* You can adjust the value to your desired size */
  padding: 100px; /* Add padding for better visual appearance */
  margin-bottom: 100px; /* Add margin to separate inputs */
`;





const Button = styled.button`
  width: 20%;
  margin: 10px;
  background-color: #1BF28E;
  height: 60px;
  border: 0;
  border-radius: 0px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1.92px;
  `;
