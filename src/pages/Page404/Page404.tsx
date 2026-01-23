import { Link } from 'react-router';
import styles from './Page404.module.css';

const Page404 = () => {
  return (
    <main className={styles.page404}>
      <section className={styles.page404Content}>
        <h2>404 Page</h2>
        <br />
        <p>The page you are looking for does not exist.</p>
        <br />
        <Link to="/">Return to Home Page</Link>
      </section>
    </main>
  );
};

export default Page404;
