import filters from './filterArray';

function CategoryFilter({ handleFilterChange }) {
  return (
    <div>
      <select className="select" onChange={handleFilterChange} name="filter">
        {filters.map((filter) => (
          <option name="category" value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
