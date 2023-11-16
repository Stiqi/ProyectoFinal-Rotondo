import { useContext, useEffect, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import { db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";
import styles from "./cart-item.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const CartItem = ({ itemId }) => {
  const [item, setItem] = useState();
  const { cart, handleCart, setCantidadTotal } = useContext(CartContext);

  useEffect(() => {
    const itemRef = doc(db, "products", itemId);

    getDoc(itemRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, []);

  const quitarDelCarrito = () => {
    handleCart(itemId, 0);
    setCantidadTotal((prevCantidadTotal) => prevCantidadTotal - cart[itemId]);
  };

  return item ? (
    <div className={styles.container}>
      <Link to={`/item/${itemId}`} className={styles.link}>
        <img src={item.image} className={styles.image} />
      </Link>
      <div className={styles.details}>
        <div>
          <h2>{item.title}</h2>
          <p>Tamaño: {item.size}cm</p>
          <p>Precio unitario: ${item.price}</p>
        </div>
        <div className={styles.counter}>
          <ItemCounter itemId={itemId} key={itemId} price={item.price} />
          <button onClick={quitarDelCarrito} className={styles.quitar}>Quitar del carrito</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="spinner-screen">
      <div className="spinner"></div>
      <p>Cargando objeto</p>
    </div>
  );
};

export default CartItem;
