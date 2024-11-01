import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/products">Produtos</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/shopcart">Shopcart</Link>
      </li>
      <li>
        <Link href="/todos">Todos</Link>
      </li>
    </ul>
  );
}
