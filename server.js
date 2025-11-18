// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// -----------------------------
// In-memory movie data
// -----------------------------
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    isClassic: true,
    director: "Frank Darabont"
  },
  {
    id: 2,
    title: "Pulp Fiction",
    genre: "Crime",
    releaseYear: 1994,
    isClassic: true,
    director: "Quentin Tarantino"
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    isClassic: false,
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    isClassic: false,
    director: "Christopher Nolan"
  },
  {
    id: 5,
    title: "Back to the Future",
    genre: "Sci-Fi",
    releaseYear: 1985,
    isClassic: true,
    director: "Robert Zemeckis"
  },
  {
    id: 6,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    releaseYear: 2014,
    isClassic: false,
    director: "Wes Anderson"
  },
  {
    id: 7,
    title: "Get Out",
    genre: "Horror",
    releaseYear: 2017,
    isClassic: false,
    director: "Jordan Peele"
  }
];

// -----------------------------
// Middleware: serve static files from /public
// -----------------------------
app.use(express.static(path.join(__dirname, 'public')));

// -----------------------------
// GET /movies -> return all movies
// -----------------------------
app.get('/movies', (req, res) => {
  res.json(movies);
});

// -----------------------------
// GET /movies/classics -> return movies where isClassic is true
// -----------------------------
app.get('/movies/classics', (req, res) => {
  const classics = movies.filter(m => m.isClassic === true);
  res.json(classics);
});

// -----------------------------
// GET /movies/genres -> return unique genres with counts
// Response structure: { genres: [ { name: 'Drama', movieCount: 2 }, ... ] }
// -----------------------------
app.get('/movies/genres', (req, res) => {
  // Use reduce to count movies per genre
  const counts = movies.reduce((acc, movie) => {
    const g = movie.genre;
    acc[g] = (acc[g] || 0) + 1;
    return acc;
  }, {});

  const genres = Object.keys(counts).map(name => ({
    name,
    movieCount: counts[name]
  }));

  res.json({ genres });
});

// -----------------------------
// Start the server
// -----------------------------
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}/movies`);
   console.log(`✅ Server running on http://localhost:${PORT}/movies/classics`);
    console.log(`✅ Server running on http://localhost:${PORT}/movies/genres`);
});
