import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';




// Header container
const HeaderContainer = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(12px);
  background: rgba(31, 31, 31, 0.6);
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.2);
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Neon glow logo
const Logo = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 900;
  color: #ec4899;
  text-shadow:
    0 0 5px #ec4899,
    0 0 15px #ec4899,
    0 0 30px #f43f5e,
    0 0 45px #f43f5e;
  user-select: none;
  cursor: default;
`;

// Navigation
const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

// Nav Item with 3D hover effect
const NavLink = styled(motion(Link))`
  position: relative;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 12px;
  transition: transform 0.3s ease, color 0.3s ease;
  perspective: 1000px;

  &:hover {
    color: #ec4899;
    transform: rotateX(10deg) rotateY(10deg) scale(1.1);
    text-shadow: 0 0 10px #ec4899;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 2px;
    width: 0;
    background: #ec4899;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Logo
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        MyPortfolio
      </Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
