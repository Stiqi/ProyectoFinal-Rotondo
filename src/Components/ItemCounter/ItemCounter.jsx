import { useState, useContext } from "react";
import style from "./item-counter.module.css";
import { CartContext } from "../../Context/cartContext";

const ItemCounter = ({ price, itemId }) => {
  const { handleCart, cart, setCantidadTotal } = useContext(CartContext);
  const initialCounter = cart[itemId] || 0;
  const [counter, setCounter] = useState(initialCounter);

  const handleRestar = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
      setCantidadTotal((prevCantidadTotal) => prevCantidadTotal - 1);
      handleCart(itemId, counter - 1);
    }
  };

  const handleSumar = () => {
    setCounter((prevCounter) => prevCounter + 1);
    handleCart(itemId, counter + 1);
    setCantidadTotal((prevCantidadTotal) => prevCantidadTotal + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: "1.5em", margin: "1em" }}>
        ${price * counter}
      </span>
      <div className={style["container-counter"]}>
        <button className={style.boton} onClick={handleRestar}>
          -
        </button>
        <p className={style.counter}>{counter} en el carrito</p>
        <button className={style.boton} onClick={handleSumar}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
