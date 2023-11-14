import styles from "./item-detail-container.module.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const itemRef = doc(db, "products", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        setNotFound(true);
      }
    });
  }, []);

  if (notFound) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Objeto no encontrado</h2>
        <Link to={"/store"} className={styles.back}>
          Ir a la tienda
        </Link>
      </div>
    );
  }

  return product ? (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.info}>
        <div className={styles["image-container"]}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.cta}>
          <div className={styles.description}>
            <p>{product.description}</p>
          </div>
          <ul className={styles.list}>
            <li>Tamaño: {product.size}cm</li>
            <li>Precio unitario: ${product.price}</li>
          </ul>
          <div>
            <ItemCounter price={product.price} itemId={id} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="spinner-screen">
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default ItemDetailContainer;
