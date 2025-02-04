import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to the Rick & Morty Universe</h1>
        <a href="/characters" className={styles.cta}>Explore Characters</a>
      </div>
    </div>
  );
}

export default Home;