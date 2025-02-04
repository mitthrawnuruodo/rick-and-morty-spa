import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import styles from './Characters.module.css';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className={styles.characters}>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id} className={styles.card}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;