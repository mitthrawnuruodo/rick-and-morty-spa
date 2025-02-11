import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Characters.module.css";

function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const charactersPerPage = 12;

  const fetchAllCharacters = async () => {
    setLoading(true);
    try {
      let allData = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();

        allData = [...allData, ...data.results];
        hasMore = data.info.next !== null;
        page++;
      }

      setAllCharacters(allData);
      setVisibleCharacters(allData.slice(0, charactersPerPage));
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;

    setVisibleCharacters((prev) => [
      ...prev,
      ...allCharacters.slice(startIndex, endIndex),
    ]);
    setCurrentPage(nextPage);
  };

  return (
    <div className={styles.characters}>
      <h1>Characters</h1>
      <ul>
        {visibleCharacters.map((character) => (
          <li key={character.id} className={styles.card}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {loading && <p>Loading all characters...</p>}

      {!loading && visibleCharacters.length < allCharacters.length && (
        <button onClick={handleLoadMore} className={styles.loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Characters;
