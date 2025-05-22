import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets...",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.8,
    },
    {
      title: "Interstellar",
      description: "A journey through space and time...",
      posterURL: "https://via.placeholder.com/150",
      rating: 4.5,
    }
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    movie.rating >= filter.rating
  );

  return (
    <div className="App">
      <h1>🎬 Movie App</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
