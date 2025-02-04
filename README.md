# Rick & Morty SPA

A React Single Page Application (SPA) that displays characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/). The app allows users to browse characters, view detailed information, and search for specific characters.

## Features

- **Character Listing:** View a paginated list of characters with images and names.
- **Character Details:** Click on any character to see detailed information.
- **Search Functionality:** Search for characters by name.
- **Load More:** Incrementally load more characters.
- **Responsive Design:** Optimized for different screen sizes.

## Tech Stack

- **React** (v19.0.0)
- **React Router** (v7.1.5) for client-side routing
- **Parcel** (v2.13.3) as the bundler
- **CSS Modules** for scoped styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/rick-and-morty-spa.git
   cd rick-and-morty-spa
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:1234/`.

### Build for Production

To build the app for production:

```bash
npm run build
```

## Project Structure

```
rick-and-morty-spa/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.module.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.module.css
│   │   ├── Characters/
│   │   │   ├── Characters.js
│   │   │   └── Characters.module.css
│   │   └── CharacterDetails/
│   │       ├── CharacterDetails.js
│   │       └── CharacterDetails.module.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## API Reference

- **Base URL:** `https://rickandmortyapi.com/api`
- **Characters Endpoint:** `/character`

## License

This project is licensed under the MIT License.

## Acknowledgments

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Parcel](https://parceljs.org/)
- [Rick and Morty API](https://rickandmortyapi.com/)

---

Happy coding! 🚀

