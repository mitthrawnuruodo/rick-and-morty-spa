/*
Key Features Explained:
* Fetching Data: Handles paginated API requests to get all characters.
* Pagination: Displays characters in chunks (charactersPerPage), loading more on demand.
* Search Functionality: Filters characters by name in real-time.
* Error Handling: Logs any errors during data fetching.
* Conditional Rendering: Shows loading messages, handles empty search results, and controls the visibility of the "Load More" button.
*/

// Import necessary React hooks and components
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./Characters.module.css";

function Characters() {
  // State to hold all fetched characters from the API
  const [allCharacters, setAllCharacters] = useState([]);
  // State to manage characters currently visible on the page
  const [visibleCharacters, setVisibleCharacters] = useState([]);
  // Track the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // Loading state to show a loader while fetching data
  const [loading, setLoading] = useState(false);
  // State to track the search input value
  const [searchQuery, setSearchQuery] = useState("");
  // Number of characters to display per page
  const charactersPerPage = 12;

  // Function to fetch all characters from the API (handles pagination on the API)
  const fetchAllCharacters = async () => {
    setLoading(true); // Set loading state to true when data fetching starts
    try {
      let allData = []; // To store all fetched characters
      let page = 1; // Start fetching from page 1
      let hasMore = true; // Flag to check if more pages are available

      // Loop to fetch characters page by page until there's no next page
      while (hasMore) {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();

        // Add newly fetched characters to the existing list
        allData = [...allData, ...data.results];
        // Check if there is another page of data
        hasMore = data.info.next !== null;
        page++; // Move to the next page
      }

      // Set the complete list of characters in the state
      setAllCharacters(allData);
      // Display the first set of characters based on charactersPerPage
      setVisibleCharacters(allData.slice(0, charactersPerPage));
    } catch (error) {
      console.error("Error fetching characters:", error); // Handle fetch errors
    } finally {
      setLoading(false); // Stop loading once fetching is done
    }
  };

  // useEffect to trigger data fetching when the component mounts
  useEffect(() => {
    fetchAllCharacters();
  }, []);

  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    const nextPage = currentPage + 1; // Move to the next page
    const startIndex = (nextPage - 1) * charactersPerPage; // Calculate start index for new characters
    const endIndex = startIndex + charactersPerPage; // Calculate end index

    // Append new characters to the current list of visible characters
    setVisibleCharacters((prev) => [
      ...prev,
      ...allCharacters.slice(startIndex, endIndex),
    ]);
    setCurrentPage(nextPage); // Update the current page
  };

  // Function to handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase(); // Convert search input to lowercase for case-insensitive search
    setSearchQuery(query); // Update search query state

    if (query === "") {
      // Reset to the first page if search input is cleared
      setVisibleCharacters(allCharacters.slice(0, charactersPerPage));
      setCurrentPage(1);
    } else {
      // Filter characters based on the search query
      const filteredCharacters = allCharacters.filter((character) =>
        character.name.toLowerCase().includes(query)
      );
      setVisibleCharacters(filteredCharacters); // Update visible characters with search results
    }
  };

  return (
    <div className={styles.characters}>
      <h1>Characters</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search characters..."
        value={searchQuery}
        onChange={handleSearch}
        className={styles.searchInput}
      />

      {/* List of Characters */}
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

      {/* Loading Message */}
      {loading && <p>Loading all characters...</p>}

      {/* Message if No Characters are Found */}
      {!loading && visibleCharacters.length === 0 && (
        <p>No characters found.</p>
      )}

      {/* Load More Button (only if more characters are available and no active search) */}
      {!loading &&
        visibleCharacters.length < allCharacters.length &&
        searchQuery === "" && (
          <button onClick={handleLoadMore} className={styles.loadMore}>
            Load More
          </button>
        )}
    </div>
  );
}

export default Characters;
