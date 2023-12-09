import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Assets/Logo_FF.png";
import { Link } from "react-router-dom";
import DropDownProfile from "../Pages/SubMenu";
import { NavLink } from 'react-router-dom';


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

          <ActiveLinkStyle to={"/Search"}>Buscar</ActiveLinkStyle>
          <ActiveLinkStyle to={"/"}>Pratos do Dia</ActiveLinkStyle>
          <ActiveLinkStyle to={"/Mapa"}>Mapa</ActiveLinkStyle>

        </Links>



        <Divsingin>
          <ActiveLinkStyle to={"/SingIn"}>Login</ActiveLinkStyle>
        </Divsingin>

        {/* Button to open DropDownProfile */}
        <ToggleDropDownButton onClick={toggleDropDown}>Open Sub Menu</ToggleDropDownButton>
      </Header>
      
      {/* Pass the visibility state to DropDownProfile */}
      {isDropDownVisible && <DropDownProfile />}
    </>
  );
}

const ActiveLinkStyle = styled(NavLink)`
  font-size: 24px;
  padding-left: 60px;
  font-weight: 800;
  text-decoration: none;
  color: #ffffff; 

  &.active {
    color: #f2b56b;
  }
`;



const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-top: 28px;

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
`;

const Divsingin = styled.div`
  margin-right: 59px;
  margin-top: 28px;

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
  font-size: 18px;
  background: none;
  border: none;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  padding: 0;
  margin: 10px; /* Adjust the margin-top value to make the button lower */
  display: block;

  &:hover {
    color: #f2b56b; /* Change the color on hover */
  }
`;
