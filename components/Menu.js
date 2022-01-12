import Link from "next/link";
import styles from "../styles/Home.module.css";

function Menu() {
  return (
    <ul className={styles.nav}>
      <li className={styles.menu}>
        <Link href="/">
          <a className={styles.textMenu}>Home</a>
        </Link>
      </li>
      <li className={styles.menu}>
        <Link href="/">
          <a className={styles.textMenu}>Features</a>
        </Link>
      </li>
      <li className={styles.menu}>
        <Link href="/">
          <a className={styles.textMenu}>Contact</a>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
