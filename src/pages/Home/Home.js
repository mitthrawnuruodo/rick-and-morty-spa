import { Link } from 'react-router';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Welcome to the Rick and Morty Universe</h1>
          <Link to="/characters" className={styles.cta}>Explore Characters</Link>
        </div>
      </div>
      <main className={styles.main}>
        <h2>Lorem Ipsum</h2>
        <p>
          You're missing the point Morty. Why would he drive a smaller toaster with wheels? I mean, does your car look like a smaller version of your house? No.
        </p>
        <p>
          It's like the N word and the C word had a baby and it was raised by all the bad words for Jews.
        </p>
        <p>
          Morty, do you know what “wubba lubba dub dub” means?.
        </p>
        <p>
          What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it.
        </p>
        <p>
          Weddings are basically funerals with cake.
        </p>
        <p>
          I dunno, some people would pay top dollar for that kind of
        </p>
      </main>
    </>
  );
}

export default Home;