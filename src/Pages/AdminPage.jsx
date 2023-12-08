import styled from "styled-components";

export function AdminPage() {
  return (
    <>
      <Containerdiv>
        <h1>Essa é a adminPage</h1>
        <h2>Aqui há apenas admins</h2>
        <Button>Adicionar um novo lote de restaurante</Button>
        <Button>Excluir um lote de restaurante</Button>
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
  font-size: 200px;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: red;
  font-size: 100px;
  font-style: italic;
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

  }
  
`;
