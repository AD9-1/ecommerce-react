import React, { createContext, useEffect, useState } from "react";
import all_products from "../Assets/all_product";

export const ShopContext = createContext(null);
const getdefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) cart[index] = 0;
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getdefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log(cartItems);it cannot print the cartItem due to the asynchronous behavoiur of useState
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <ShopContext.Provider
      value={{
        all_data: all_products,
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
