import React, { useState } from "react";
import logo from "../logo.svg";
import cart from "../icon-cart.svg";
import avatar from "../image-avatar.png";
import styled from "styled-components";

const Navbar = () => {
  const count = 0;
  const [show, setShow] = useState(false);
  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };
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
        <IconButton onMouseEnter={open} onMouseLeave={close}>
          <CartContainer count={count}>
            <Cart src={cart} alt="cart" />
            <Basket show={show}>
              <Title>Cart</Title>
              {count === 0 && (
                <Empty>
                  <Text>Your cart is empty.</Text>
                </Empty>
              )}
            </Basket>
          </CartContainer>
        </IconButton>
        <IconButton>
          <Avatar src={avatar} alt="avatar" />
        </IconButton>
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

const IconButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const CartContainer = styled.div`
  position: relative;

  &::after {
    content: "${(props) => props.count}";
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background-color: var(--orange-color);
    color: var(--white-color);
    height: 1rem;
    width: 1.2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
`;

const Cart = styled.img``;

const Basket = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  transform: translateX(-50%) scale(0);
  transform-origin: top;
  width: 25rem;
  background-color: var(--white-color);
  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  opacity: 0;
  transition: transform 0.2s, opacity 0.2s;
  ${({ show }) =>
    show &&
    `
    transform: translateX(-50%) scale(1);
    opacity: 1;
  `}
`;

const Title = styled.h3`
  text-align: left;
  border-bottom: 0.1rem solid var(--grayish-blue-color);
  padding: 1.5rem;
`;

const Empty = styled.div`
  height: 12rem;
  display: grid;
  place-items: center;
`;

const Text = styled.p`
  color: var(--dark-grayish-blue-color);
  font-weight: bold;
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
