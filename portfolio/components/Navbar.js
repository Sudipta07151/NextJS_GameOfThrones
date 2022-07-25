import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.item}>Hi!</div>
        <div className={styles.item}>
          <Link href="/about">About</Link>
          <Link href="/characters">Characters</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
