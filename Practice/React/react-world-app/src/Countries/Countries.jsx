import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries({ countriesPromise }) {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const countries = use(countriesPromise);

    return (
        <>
            <h2>Number of Countries: {countries.length}</h2>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className="countries">
                {countries.map((country) => (
                    <Country handleVisitedCountries={handleVisitedCountries} country={country} />
                ))}
            </div>
        </>
    );
}

export default Countries;
