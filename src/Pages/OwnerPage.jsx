import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import ApiProdutos from '../service/produtos'
import { PratosContext } from "../providers/PratosContext";


export function OwnerPage() {
  const [isAddDishMenuVisible, setIsAddDishMenuVisible] = useState(false);
  const [isRemoveDishMenuVisible, setIsRemoveDishMenuVisible] = useState(false);
  const [isEditDishMenuVisible,setIsEditDishMenuVisible] = useState(false);
  const [isDishDayMenuVisible, setIsDishDayMenuVisible] = useState(false);

  const [produtos,setProdutos] = useState([])
  const {pratosDia, setPratosDia} = useContext(PratosContext)
  console.log(pratosDia)
  
  



  useEffect(() => {
    //Faz requisição de produtos
    ApiProdutos.pegaTodosProdutos()
    .then((produtos) =>{
      setProdutos(produtos.data)
    })
  }, [])
  
  const toggleDishDayMenu = () => {
    setIsDishDayMenuVisible(!isDishDayMenuVisible);
  }
  const toggleAddDishMenu = () => {
    setIsAddDishMenuVisible(!isAddDishMenuVisible);
  };

  const toggleRemoveDishMenu = () => {
    setIsRemoveDishMenuVisible(!isRemoveDishMenuVisible);
  };

  const closeAddDishMenu = () => {
    setIsAddDishMenuVisible(false);
  };

  const closeRemoveDishMenu = () => {
    setIsRemoveDishMenuVisible(!isRemoveDishMenuVisible);
  }

  const toggleEditDishMenu = () => {
    setIsEditDishMenuVisible(!isEditDishMenuVisible);
  }

  const closeEditDishMenu = () =>{
    setIsEditDishMenuVisible(!isEditDishMenuVisible);
  }

  const closeDishDayMenu = () =>{
    setIsDishDayMenuVisible(!isDishDayMenuVisible)
  }
  return (
    <>
      <Navbar />
      <Containerdiv>
        <H1>Essa é a Página do seu restaurante</H1>
        <H2>Aqui você pode editar o seu restaurante</H2>
        <Button onClick={toggleAddDishMenu}>Adicionar um novo prato ao restaurante</Button>

        {/* Add Dish Menu */}
        {isAddDishMenuVisible && (
          <DishMenu>
            <InputBox placeholder="Nome do prato"></InputBox>
            <InputBox placeholder="Preço"></InputBox>
            <InputBox placeholder="Link URL da imagem do prato"></InputBox>
            <Button>Adicionar novo prato</Button>
            <Button onClick={closeAddDishMenu}>Fechar menu</Button>
          </DishMenu>
        )}
        <Button onClick={toggleRemoveDishMenu}>Remover um prato do restaurante</Button>

        {/* Menu Remover Prato */}
        {isRemoveDishMenuVisible && (
          <DishMenu>
            <InputBox placeholder="Nome do prato"></InputBox>
            <InputBox placeholder="Código de confirmação"></InputBox>
            <Button>Remover prato</Button>
            <Button onClick={closeRemoveDishMenu}>Fechar menu</Button>
          </DishMenu>
        )}
        <Button onClick={toggleEditDishMenu}>Editar o preço de um prato</Button>

        {isEditDishMenuVisible && (
          <DishMenu>
            <InputBox placeholder="Nome do prato"></InputBox>
            <InputBox placeholder="Código de confirmação"></InputBox>
            <InputBox placeholder="Editar preço"></InputBox>
            <Button>Editar preço</Button>
            <Button onClick={closeEditDishMenu}>Fechar menu</Button>
          </DishMenu>
        )}
        <ButtonAnc onClick={toggleDishDayMenu}>Anuncie um prato como "prato do dia"</ButtonAnc>

        {isDishDayMenuVisible && (
          <DishMenu1>
            <DivProdutos>
              <h1>Lista de Produtos</h1>
              <ul>
                {produtos.map((produto, index) => (
                  <li key={`${produto.id_produto}_${index}`}>
                    <button onClick={() => {
                      if (!pratosDia.some((prato) => prato.id_produto === produto.id_produto)) {
                        setPratosDia([...pratosDia, produto]);
                      }
                    }}>
                      <strong>{produto.nome_produto}</strong>
                    </button>
                  </li>
                ))}
              </ul>

            </DivProdutos>
            <Button onClick={closeDishDayMenu}>Fechar menu</Button>
          </DishMenu1>

        )}
      </Containerdiv>

    </>
  );
}

const DivProdutos = styled.div`

`
const Containerdiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

const ButtonAnc = styled.button`
  position: relative;
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

const DishMenu = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  z-index: 999;
`;

const DishMenu1 = styled.div`
  margin-top: 250px;
  position: absolute;
  top: 67.9%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
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

