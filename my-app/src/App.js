import React, { useState } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const App = () => {
  const productName = "Fall Limited Edition Sneakers";
  const productNewPrice = 125.0;
  const discount = 50;
  const productOldPrice = 250.0;
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(0);
  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    if (count > 0) setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const addItems = () => {
    setItems((items) => items + count);
    reset();
  };
  const removeItems = () => {
    setItems(0);
  };
  return (
    <React.Fragment>
      <Navbar
        productName={productName}
        productPrice={productNewPrice}
        count={items}
        removeItems={removeItems}
      />
      <Main>
        <Left>Left</Left>
        <Right>
          <CompanyName>SNEAKER COMPANY</CompanyName>
          <ProductName>{productName}</ProductName>
          <ProductDescription>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </ProductDescription>
          <Flex alignItems="center" gap="1rem">
            <ProductNewPrice>${productNewPrice.toFixed(2)}</ProductNewPrice>
            <Discount>{discount}%</Discount>
          </Flex>
          <ProductOldPrice>${productOldPrice.toFixed(2)}</ProductOldPrice>
          <Flex gap="1rem">
            <Counter>
              <DecreaseButton onClick={decrease}>-</DecreaseButton>
              <Count>{count}</Count>
              <IncreaseButton onClick={increase}>+</IncreaseButton>
            </Counter>
            <AddToCartButton onClick={addItems}>
              <CartContainer>
                <Cart width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </Cart>
              </CartContainer>
              Add to cart
            </AddToCartButton>
          </Flex>
        </Right>
      </Main>
    </React.Fragment>
  );
};

export default App;

const Main = styled.div`
  width: 80%;
  margin-inline: auto;
  height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const CompanyName = styled.h5`
  color: var(--orange-color);
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

const ProductName = styled.h1`
  color: var(--very-dark-blue-color);
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 2rem;
`;

const ProductDescription = styled.p`
  color: var(--dark-grayish-blue-color);
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`;

const ProductNewPrice = styled.div`
  color: var(--very-dark-blue-color);
  font-size: 2rem;
  font-weight: bold;
`;

const Discount = styled.div`
  color: var(--orange-color);
  background-color: var(--pale-orange-color);
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

const ProductOldPrice = styled.div`
  text-decoration: line-through;
  color: var(--grayish-blue-color);
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const Counter = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-grayish-blue-color);
  padding: 1rem;
  border-radius: 0.5rem;
`;

const DecreaseButton = styled.button`
  background-color: transparent;
  color: var(--orange-color);
  padding: 0;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: var(--light-orange-color);
  }
`;

const IncreaseButton = styled(DecreaseButton)``;

const Count = styled.span`
  color: var(--very-dark-blue-color);
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--orange-color);
  color: var(--white-color);
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 5rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem var(--pale-orange-color);

  &:hover {
    cursor: pointer;
    background-color: var(--light-orange-color);
  }
`;

const CartContainer = styled.div``;

const Cart = styled.svg``;
