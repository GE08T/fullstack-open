const PersonForm = ({ onSubmit, onChange, newNumber, newName }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={onChange} name="name" />
      </div>
      <div>
        number: <input value={newNumber} onChange={onChange} name="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
