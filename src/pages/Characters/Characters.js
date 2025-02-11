import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Characters.module.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if more characters are available
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchCharacters = async (currentPage) => {
    setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const data = await response.json();

      setCharacters((prev) => [...prev, ...data.results]); // Append new characters
      setHasMore(data.info.next !== null); // Check if more pages are available
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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

      {loading && <p>Loading...</p>}

      {hasMore && !loading && (
        <button onClick={handleLoadMore} className={styles.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Characters;
