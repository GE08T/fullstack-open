import Weather from "./Weather";

const CountryDetail = ({ countries }) => {
  return (
    <div>
      {countries.map((item) => (
        <div key={item.ccn2}>
          <h1>{item.name.common}</h1>
          <p>Capital : {item.capital}</p>
          <p>Area : {item.area}</p>
          <h1>Languages</h1>
          <ul>
            {Object.values(item.languages).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <img src={item.flags.png} alt={`flag-${item.name.common}`} />
          <Weather capital={item.capital} />
        </div>
      ))}
    </div>
  );
};

export default CountryDetail;
