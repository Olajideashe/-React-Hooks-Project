import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A skilled thief enters dreams to steal secrets.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space.",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.5,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>🎬 Movie App</h1>
              <Filter filter={filter} onFilterChange={handleFilterChange} />
              <AddMovie onAddMovie={handleAddMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movies/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
