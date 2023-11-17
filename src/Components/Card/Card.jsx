import { Link } from "react-router-dom";
import style from "./card.module.css";
import ItemCounter from "../ItemCounter/ItemCounter";

const Card = ({ image, title, price, id }) => {
  return (
    <div className={style.card}>
      <Link to={`/item/${id}`}>
        <img src={image} alt={title} className={style["card-img"]} />
      </Link>
      <p className={style.title}>{title}</p>
      <p className={style.price}>${price} c/u</p>
      <ItemCounter price={price} itemId={id} />
      <Link to={`/item/${id}`} className="boton">
        Ver Detalle
      </Link>
    </div>
  );
};

export default Card;
