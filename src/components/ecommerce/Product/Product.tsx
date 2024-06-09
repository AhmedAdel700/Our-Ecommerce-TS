import { TProducts } from "@components/types/productsTypes";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { product, productImg, productTitle } = styles;
export default function Product({ title, img, price }: TProducts) {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>

      <h2 className={productTitle}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add To Chart
      </Button>
    </div>
  );
}
