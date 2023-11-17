import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./cart.module.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import BriefItem from "../BriefItem/BriefItem";

const Cart = () => {
  const { cart, precioTotal } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TO DO : Enviar pedido a Firebase
  };

  return Object.keys(cart).length > 0 ? (
    <div className={styles.container}>
      <div className={styles.objects}>
        <h2>TU CARRITO</h2>
        {Object.keys(cart).map((id) => (
          <CartItem itemId={id} key={id} />
        ))}
      </div>
      <div className={styles.checkout}>
        <div className={styles["checkout-details"]}>
          <div>
            <h2>CHECKOUT</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">
                Nombre
                <input
                  type="text"
                  id="name"
                  placeholder="Joaquin Rotondo"
                  maxLength={24}
                />
              </label>
              <label htmlFor="phone">
                Teléfono
                <input
                  type="numeric"
                  id="phone"
                  placeholder="1111222233"
                  maxLength={10}
                />
              </label>
              <label htmlFor="mail">
                Mail
                <input
                  type="email"
                  id="meil"
                  placeholder="ejemplo@ejemplo.com"
                />
              </label>
              <div className={styles.brief}>
                <h4>Tu pedido</h4>
                <ul>
                  {Object.keys(cart).map((id) => (
                    <BriefItem key={id} itemId={id} />
                  ))}
                </ul>
              </div>
              <p className={styles.total}>TOTAL: ${precioTotal}</p>
              <button className={`boton ${styles.send}`} type="submit">
                Hacer Pedido
              </button>
            </form>
          </div>
          <div>
            <p>
              Te faltó algo?
              <br />
              <Link to={"/"} className={` ${styles.back}`}>
                ¡Volver a la tienda!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.empty}>
      <h3>Tu carrito está vacío</h3>
      <Link to={"/"} className={`boton ${styles["back-empty"]}`}>
        Volver a la tienda
      </Link>
    </div>
  );
};

export default Cart;
