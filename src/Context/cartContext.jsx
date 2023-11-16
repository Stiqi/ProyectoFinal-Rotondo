import { createContext, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [cart, setCart] = useState({});

  const handleCart = (itemId, cantidad) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (cantidad === 0) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] = cantidad;
      }

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cantidadTotal, cart, setCantidadTotal, handleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartComponentContext;
