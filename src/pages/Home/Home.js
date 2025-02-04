import { Link } from 'react-router';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Welcome to the Rick and Morty Universe</h1>
          <Link to="/characters" className={styles.cta}>Explore Characters</Link>      </div>
      </div>
      <main>
        <h2>Lorem Ipsum</h2>
        <p>Dill</p>
      </main>
    </>
  );
}

export default Home;