import styled from "styled-components";
import Navbar from "../Components/Navbar";

export function AdminPage() {
  return (
    <>
    <Navbar />
      <Containerdiv>
        <H1>Essa é a adminPage</H1>
        <H2>Aqui há apenas admins</H2>
        <InputBox placeholder="Adicionar um novo restaurante"></InputBox>
        <Button>Adicionar um novo lote de restaurante</Button>
        <InputBox placeholder="Excluir um restaurante já existente"></InputBox>
        <Button>Excluir um lote de restaurante</Button>
        <InputBox placeholder="Adicionar um prato do dia"></InputBox>
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
  font-size: 40px;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: red;
  font-size: 30px;
  font-style: italic;
`;

const InputBox = styled.input`
  width: 50%;
  height: 40px;
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
