import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import "./index.css";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState({ message: null, type: null });

  useEffect(() => {
    personServices.getAll().then((initialPerson) => setPersons(initialPerson));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const lastId = Number([...persons][persons.length - 1].id) + 1;

    const newObj = {
      name: newName,
      number: newNumber,
      id: String(lastId),
    };

    const nameExist = persons.find((person) => person.name === newObj.name);

    if (nameExist) {
      const text = `${newName} is already added to phonebook, replace the old number with a new one?`;
      const changePerson = { ...nameExist, number: newObj.number };

      if (window.confirm(text)) {
        updatePersons(changePerson, nameExist);
      }

      return;
    }

    personServices
      .create(newObj)
      .then((returnedNote) => {
        setPersons(persons.concat(returnedNote));
        setNewName("");
        setNewNumber("");
      })
      .then(() => {
        setMessage({ message: `Added ${newObj.name}`, type: "success" });

        setTimeout(() => {
          setMessage({ message: null, type: null });
        }, 5000);
      });
  };

  const handleDelete = (id, name) => {
    const newObj = [...persons].filter((item) => item.id !== id);

    if (window.confirm(`Delete ${name} ?`)) {
      personServices.deleteById(id).then(() => setPersons(newObj));
    }
  };

  const handleInput = (event) => {
    if (event.target.name === "name") {
      setNewName(event.target.value);
    } else if (event.target.name === "number") {
      setNewNumber(event.target.value);
    } else if (event.target.name === "search") {
      setSearch(event.target.value);
    }
  };

  const updatePersons = (changePerson, nameExist) => {
    personServices
      .update(nameExist.id, changePerson)
      .then((returnedPerson) => {
        setPersons(
          persons.map((person) =>
            person.id !== nameExist.id ? person : returnedPerson,
          ),
        );
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        setMessage({
          message: `Information of ${nameExist.name} has been removed from server`,
          type: "error",
        });

        setTimeout(() => {
          setMessage({ message: null, type: null });
        }, 5000);

        setNewName("");
        setNewNumber("");
        setPersons(persons.filter((n) => n.id !== nameExist.id));
      });
  };

  const filterPerson = [...persons].filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={message.message} type={message.type} />
      <Filter onChange={handleInput} value={search} />
      <h3>add a New</h3>
      <PersonForm
        onSubmit={handleSubmit}
        onChange={handleInput}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons list={filterPerson} onClick={handleDelete} />
    </div>
  );
};

export default App;
