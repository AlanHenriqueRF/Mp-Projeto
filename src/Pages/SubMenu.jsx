import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DropDownProfile = () => {
  return (
    <DropDownProfileContainer>
      <ul>
        <Button to="/Admin">Admin</Button>
        <Button to="/Owner">Owner</Button>
        <Button to="/">Logout</Button>
      </ul>
    </DropDownProfileContainer>
  );
};

const DropDownProfileContainer = styled.div`
  position: fixed;
  top: 60px; /* Adjust the top position as needed */
  right: 40px;
  padding: 16px;
  background-color: #333; /* Adjust the background color as needed */
  text-align: right; /* Align the content to the right */
`;

const Button = styled(Link)`
  color: white;
  font-size: 20px;
  font-style: italic;
  text-decoration: none; /* Remove default link styling */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: block;
  margin-bottom: 8px;

  &:hover {
    color: #FFD700; /* Change the color on hover (you can use any color you prefer) */
  }
`;

export default DropDownProfile;
