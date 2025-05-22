const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={(e) =>
          onFilterChange({ ...filter, title: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={filter.rating}
        onChange={(e) =>
          onFilterChange({ ...filter, rating: parseFloat(e.target.value) || 0 })
        }
      />
    </div>
  );
};

export default Filter;
