import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

export function AdminPage() {
  const [isAddMenuVisible, setIsAddMenuVisible] = useState(false);
  const [isDeleteMenuVisible, setIsDeleteMenuVisible] = useState(false);

  const toggleAddMenu = () => {
    setIsAddMenuVisible(!isAddMenuVisible);
  };

  const toggleDeleteMenu = () => {
    setIsDeleteMenuVisible(!isDeleteMenuVisible);
  };

  const closeAddMenu = () => {
    setIsAddMenuVisible(false);
  };

  const closeDeleteMenu = () => {
    setIsDeleteMenuVisible(false);
  };

  return (
    <>
      <Navbar />
      <Containerdiv>
        <H1>Essa é a adminPage</H1>
        <H2>Aqui há apenas admins</H2>
        <Button onClick={toggleAddMenu}>Adicionar um novo restaurante</Button>
        {isAddMenuVisible && (
          <RestMenu>
            <RestaurantMenu placeholder1="Nome do restaurante" placeholder2="Image URL" placeholder3 ="Código de confirmação">
              <Button>Adicionar novo prato</Button>
              <Button onClick={closeAddMenu}>Fechar menu</Button>
            </RestaurantMenu>
          </RestMenu>
        )}
        
        <Button onClick={toggleDeleteMenu}>Excluir um restaurante</Button>
        {isDeleteMenuVisible && (
          <RestMenu>
            <RestaurantMenu placeholder1="Nome do restaurante para deletar" placeholder2="Código de confirmação" placeholder3="Motivo">
              <Button> Deletar um restaurante </Button>
              <Button onClick={closeDeleteMenu}>Fechar menu</Button>
            </RestaurantMenu>
          </RestMenu>
        )}
        
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

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const RestaurantMenu = ({ children, placeholder1, placeholder2,placeholder3 }) => {
  return (
    <MenuContainer>
      <InputBox placeholder={placeholder1}></InputBox>
      <InputBox placeholder={placeholder2}></InputBox>
      <InputBox placeholder={placeholder3}></InputBox>
      {children}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 1000px;
  font-family: 'Inter';
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CloseButton = styled.button`
  /* Add styles for the close button */
  margin-top: 10px; /* Add vertical margin between buttons */
`;

const RestMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  z-index: 999;
`;