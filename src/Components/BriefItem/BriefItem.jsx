import { db } from "../../firebase/client";
import { CartContext } from "../../Context/cartContext";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import "./brief-item.module.css";

const BriefItem = ({ itemId }) => {
  const [item, setItem] = useState();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const itemRef = doc(db, "products", itemId);

    getDoc(itemRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, []);

  return item ? (
    <li>
      {`> ${cart[itemId]} 
      ${item.title}`}
    </li>
  ) : null;
};

export default BriefItem;
