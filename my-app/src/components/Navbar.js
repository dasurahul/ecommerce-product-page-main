import React from "react";
import logo from "../logo.svg";
import cart from "../icon-cart.svg";
import avatar from "../image-avatar.png";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Flex alignItems="center" gap="3rem" height="100%">
        <Logo src={logo} alt="logo" />
        <Nav>
          <NavItem>
            <NavLink href="#">Collections</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Men</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Women</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </Nav>
      </Flex>
      <Flex alignItems="center" gap="2.5rem">
        <img src={cart} alt="cart" />
        <Avatar src={avatar} alt="avatar" />
      </Flex>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 80%;
  margin-inline: auto;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid var(--grayish-blue-color);
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  height: ${(props) => props.height};
`;

const Logo = styled.img``;

const Nav = styled.ul`
  display: flex;
  gap: 1.5rem;
  height: 100%;
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: var(--dark-grayish-blue-color);

  &:hover {
    color: var(--very-dark-blue-color);
  }

  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 0.1rem);
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.2rem;
    background-color: var(--orange-color);
    transform: scale(0);
    transition: transform 0.2s;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid transparent;
  border-radius: 50%;

  &:hover {
    border: 0.2rem solid var(--orange-color);
  }
`;
