import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./item-list-container.module.css";
import Card from "../Card/Card";
import { db } from "../../firebase/client";
import { collection, getDocs } from "firebase/firestore";
import { CartContext } from "../../Context/cartContext";

const CapitalizeCategory = (category) => {
  return category[0].toUpperCase() + category.slice(1);
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const { categoryId } = useParams();
  const { setItemNames } = useContext(CartContext);

  useEffect(() => {
    const productsRef = collection(db, "products");
    const itemNamesObject = {};

    getDocs(productsRef)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            itemNamesObject[doc.id] = doc.data().title;
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
        setItemNames(itemNamesObject);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  const filterCatalog = () => {
    categoryId
      ? setFilteredCatalog(
          items.filter((item) => item.categoryId.includes(categoryId))
        )
      : setFilteredCatalog(items);
  };

  useEffect(() => {
    filterCatalog(items);
  }, [items, categoryId]);

  return (
    <div className={style.store}>
      <h1 className={style.greeting}>
        {categoryId ? CapitalizeCategory(categoryId) : "¡Stiqi 3D Store!"}
      </h1>
      {filteredCatalog.length > 0 ? (
        <div className={style["item-list"]}>
          {filteredCatalog.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      ) : (
        <div className="spinner-screen">
          <div className="spinner"></div>
          <p>Cargando...</p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
