const Filter = ({ onChange, value }) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={onChange} value={value} name="search" />
    </div>
  );
};

export default Filter;
