import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
