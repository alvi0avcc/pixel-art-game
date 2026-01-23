import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.info}
        href="https://github.com/alvi0avcc/pixel-art-game"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to repo
      </a>
    </footer>
  );
};

export default Footer;
