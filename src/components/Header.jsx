import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Glow animatsiyasi Logo uchun
const glow = keyframes`
  0%, 100% {
    text-shadow:
      0 0 5px #ec4899,
      0 0 10px #ec4899,
      0 0 20px #ec4899,
      0 0 40px #f472b6;
  }
  50% {
    text-shadow:
      0 0 10px #f472b6,
      0 0 20px #f472b6,
      0 0 30px #ec4899,
      0 0 50px #f43f5e;
  }
`;

// Logo component
const Logo = styled.h1`
  font-size: 2.2rem;
  color: #ec4899;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: default;
  animation: ${glow} 3s ease-in-out infinite;
  user-select: none;
`;

// Header container
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  padding: 20px 40px;
  background: linear-gradient(to right, #1f1f1f, #2b2b2b);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(255, 20, 147, 0.3);
`;


// Nav container
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

// Styled Link with advanced hover effect
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: #ec4899;
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #ec4899;
    text-shadow: 0 0 10px rgba(236, 72, 153, 0.8);
  }

  &:hover:before {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MyPortfolio</Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/clients">Clients</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
