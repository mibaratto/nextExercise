import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/products">
          <h2>Produtos</h2>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <h2>About</h2>
        </Link>
      </li>
      <li>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </li>
    </ul>
  );
}
