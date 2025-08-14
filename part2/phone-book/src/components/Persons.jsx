const Persons = ({ list, onClick }) => {
  return (
    <div>
      {list.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => onClick(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
