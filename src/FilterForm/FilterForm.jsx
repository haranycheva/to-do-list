export function FilterForm({ valueTitle, valueLevel, onFilterChange }) {
  const onFiltersValueChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };
  return (
    <>
      <input
        onChange={onFiltersValueChange}
        name="title"
        type="text"
        value={valueTitle}
      />
      <select onChange={onFiltersValueChange} name="level" value={valueLevel}>
        <option value="easy">Level 1</option>
        <option value="medium">Level 2</option>
        <option value="hard">Level 3</option>
        <option value="all">All</option>
      </select>
    </>
  );
}
