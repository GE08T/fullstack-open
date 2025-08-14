import CountryDetail from "./CountryDetail";

const ListCountry = ({ countries, onClick }) => {
  return (
    <div>
      {countries.map((item) => (
        <p key={item.cca2}>
          {item.name.common}{" "}
          <button onClick={() => onClick([item])}>Show</button>
        </p>
      ))}
    </div>
  );
};

const Countries = ({ countries, onClick }) => {
  if (countries.length == 0) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length == 1) {
    return <CountryDetail countries={countries} />;
  } else if (countries.length <= 10) {
    return <ListCountry countries={countries} onClick={onClick} />;
  }
  return <p>Too many matches, specify another filter</p>;
};

export default Countries;
