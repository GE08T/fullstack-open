import { useEffect, useState } from "react";
import countryServices from "./services/countries";
import Countries from "./components/Countries";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [countryToShow, setCountryToShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (allCountries) {
      countryServices
        .getAll()
        .then((response) => {
          setAllCountries(response);
        })
        .catch((error) => {
          console.log(error);
          setAllCountries([]);
        });
    }
  }, []);

  const handleChange = (event) => {
    const filter = event.target.value;

    setSearch(filter);
    setCountryToShow(
      allCountries.filter((item) =>
        item.name.common.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  };

  return (
    <div>
      <div>
        find countries <input onChange={handleChange} value={search} />
      </div>
      <Countries countries={countryToShow} onClick={setCountryToShow} />
    </div>
  );
}

export default App;
