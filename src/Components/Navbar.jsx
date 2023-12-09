import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Assets/Logo_FF.png";
import { Link } from "react-router-dom";
import DropDownProfile from "../Pages/SubMenu";

export default function Navbar() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  return (
    <>
      <Header>
        <LogoImage>
          <Link to={"/"}>
            <img src={Logo} alt="Logo Marca" />
          </Link>
        </LogoImage>

        <Links>
          <Link to={"/Search"}>Buscar</Link>
          <h2>|</h2>
          <Link to={"/"}>Pratos do Dia</Link>
          <h2>|</h2>
          <Link to={"/Mapa"}>Mapa</Link>
        </Links>

        <Divsingin>
          {localStorage.getItem('id_usuario') ? <Link to={"/"} onClick={()=>{localStorage.removeItem('id_usuario');
          localStorage.removeItem('funcao'); location.reload()}}>Deslogar</Link> : <Link to={"/SingIn"}>Login</Link>}
        </Divsingin>

        {/* Button to open DropDownProfile */}
        {localStorage.getItem('id_usuario') ? <ToggleDropDownButton onClick={toggleDropDown}>Open Sub Menu</ToggleDropDownButton> : <></>}
      </Header>
      
      {/* Pass the visibility state to DropDownProfile */}
      {isDropDownVisible && <DropDownProfile />}
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; /* Center the children vertically */
  background-color: #010a26;
  font-family: "Inter";
`;

const LogoImage = styled.div`
  margin-left: 20px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  a {
    font-size: 24px;
    font-weight: 800;
    text-decoration: none;
    color: #ffffff;
  }

  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    margin: 0 9px;
  }

  :nth-child(3) {
    color: #f2b56b;
  }
`;

const Divsingin = styled.div`
  margin-right: 59px;

  a {
    color: #fff;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 1.92px;
    text-decoration: none;
  }
`;

const ToggleDropDownButton = styled.button`
  color: #fff;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.92px;
  background: none;
  border: none;
  font-style: italic;
  cursor: pointer;
  padding: 0;
  /* margin: 10px; */ /* Adjust the margin-top value to make the button lower */
  display: block;

  &:hover {
    color: #f2b56b; /* Change the color on hover */
  }
`;
