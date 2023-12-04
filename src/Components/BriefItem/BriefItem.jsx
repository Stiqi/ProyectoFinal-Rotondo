import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import "./brief-item.module.css";

const BriefItem = ({ itemId }) => {
  const { cart, itemNames } = useContext(CartContext);

  return (
    <li>
      {`> ${cart[itemId]} 
      ${itemNames[itemId]}`}
    </li>
  );
};

export default BriefItem;
