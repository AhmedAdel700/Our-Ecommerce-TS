import Logo from "@assets/svg/cart.svg?react"; // we need ? react bec we are using vite and vite doesn't support svg and we installed a sgvr library for that
import styles from "./styles.module.css";

const { basketContanier, basketQuantity } = styles;

export default function HeaderBasket() {
  return (
    <div className={basketContanier}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  );
}
