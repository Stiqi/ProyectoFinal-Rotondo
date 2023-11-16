import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.objects}>
        <h2>TU CARRITO</h2>
        {Object.keys(cart).map((id) => (
          <CartItem itemId={id} key={id} />
        ))}
      </div>
      <div>asdasd</div>
    </div>
  );
};

export default Cart;
