import styled from "styled-components";

export function AdminPage() {
  return (
    <>
      <Containerdiv>
        <h1>Essa é a adminPage</h1>
        <h2>Aqui há apenas admins</h2>
        <Button>Adicionar um novo lote de restaurante</Button>
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
  font-size: 200px;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: red;
  font-size: 100px;
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
