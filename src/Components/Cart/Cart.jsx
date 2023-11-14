import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./cart.module.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      {Object.keys(cart).map((id) => (
        <div key={id}>
          <p>ID: {id}</p>
          <p>Cantidad: {cart[id]}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
