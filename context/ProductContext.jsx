"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export default function ProductsProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState({});

  function handleIncrementProduct(productId, num, data, noIncrement = false) {
    const newCart = { ...cart };
    if (productId in cart) {
      // If the product is already in the cart we take the previous value and increment/decrement it.
      //   newCart[productId] = newCart[productId] + num;
      newCart[productId] = {
        ...data,
        quantity: noIncrement ? num : newCart[productId]?.quantity + num,
      };
    } else {
      // Product is not in the cart, so we add it with the value of num.
      newCart[productId] = { ...data, quantity: num };
    }

    if (parseInt(newCart[productId]?.quantity) <= 0) {
      // The user has set the number to 0 or less, so we remove the product from the cart.
      delete newCart[productId];
    }
    // Overwrite the cart state with the new cart object.
    setCart(newCart);
  }

  const value = {
    cart,
    handleIncrementProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
