import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./cart.module.css";
import CartItem from "../CartItem/CartItem";
import BriefItem from "../BriefItem/BriefItem";
import { Link } from "react-router-dom";
import { db } from "../../firebase/client";
import { addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { cart, resetCart, precioTotal, itemNames } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const productosEnCarrito = [];

    Object.keys(cart).map((id) => {
      productosEnCarrito.push({
        producto: itemNames[id],
        cantidad: cart[id],
      });
    });

    const order = {
      comprador: {
        nombre: e.target.name.value,
        telefono: e.target.phone.value,
        mail: e.target.mail.value,
      },
      pedido: productosEnCarrito,
      total: precioTotal,
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
  };

  useEffect(() => {
    orderId && resetCart();
  }, [orderId]);

  if (orderId) {
    return (
      <div className={styles.empty}>
        <h3 style={{ color: "green" }}>¡Orden Enviada! </h3>
        <p style={{ lineHeight: "32px" }}>
          El ID de tu compra es: <br />{" "}
          <span style={{ color: "green" }}>{orderId}</span> <br /> ¡NO LO
          PIERDAS! <br />
          Pronto te contactaremos para iniciar el pago
        </p>
        <Link to={"/"} className={`boton ${styles["back-empty"]}`}>
          Seguir comprando
        </Link>
      </div>
    );
  }

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
          <h2>CHECKOUT</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nombre
              <input
                type="text"
                id="name"
                placeholder="Joaquin Rotondo"
                maxLength={24}
                required={true}
                autoCapitalize="words"
              />
            </label>
            <label htmlFor="phone">
              Teléfono
              <input
                type="numeric"
                id="phone"
                placeholder="1111222233"
                maxLength={10}
                required={true}
              />
            </label>
            <label htmlFor="mail">
              Mail
              <input
                type="email"
                id="mail"
                placeholder="ejemplo@ejemplo.com"
                required={true}
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
