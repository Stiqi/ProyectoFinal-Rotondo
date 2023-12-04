import { createContext, useState } from "react";

export const CartContext = createContext();

const CartComponentContext = ({ children }) => {
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [itemNames, setItemNames] = useState({});
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

  const resetCart = () => {
    setCantidadTotal(0);
    setPrecioTotal(0);
    setCart({});
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cantidadTotal,
        precioTotal,
        itemNames,
        resetCart,
        setItemNames,
        setCantidadTotal,
        handleCart,
        setPrecioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartComponentContext;
