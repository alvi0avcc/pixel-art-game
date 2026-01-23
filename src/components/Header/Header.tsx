import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">Pixel Art Game</Link>
      <nav className={styles.nav}>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
