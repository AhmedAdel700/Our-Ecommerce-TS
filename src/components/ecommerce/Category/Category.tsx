import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { TCategory } from "@components/types/categoryTypes";

const { category, categoryImg, categoryTitle } = styles;

export default function Category({ title, img, prefix }: TCategory) {
  return (
    <div className={category}>
      <Link to={`product/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={`Prefix Image ${prefix}`} />
        </div>
        <div className={categoryTitle}>
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}
