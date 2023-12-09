import styled from "styled-components";
import Navbar from "../Components/Navbar";

export function OwnerPage() {
  return (
    <>
    <Navbar />
      <Containerdiv>
        <H1>Essa é a Página do seu restaurante</H1>
        <H2>Aqui você pode editar o seu restaurante</H2>
        <input placeholder="Adicionar um novo prato ao restaurante"></input>
        <Button>Adicionar um novo prato</Button>
        <input placeholder="Excluir um prato do cardápio"></input>
        <Button>Excluir um prato existente</Button>
        <Button>Anuncie um prato como "prato do dia"</Button>
        
      </Containerdiv>
    </>
  );
}

const Containerdiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Inter';
`;

const H1 = styled.h1`
  font-size: 100px;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: red;
  font-size: 70px;
  font-style: italic;
`;

const Button = styled.button`
  background-color: #007bff; /* Change color as needed */
  color: white;
  padding: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3; /* Change hover color as needed */
  }
`;
