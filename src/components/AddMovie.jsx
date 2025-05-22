import { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
