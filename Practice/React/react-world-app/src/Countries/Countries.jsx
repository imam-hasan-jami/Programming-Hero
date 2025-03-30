import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries({ countriesPromise }) {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    };

    const countries = use(countriesPromise);

    return (
        <>
            <h2>Number of Countries: {countries.length}</h2>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            <div className="visited-flags-container">
                {visitedFlags.map((flag, index) => (
                    <img key={index} src={flag}></img>
                ))}
            </div>
            <ol>
                {visitedCountries.map((country) => (
                    <li key={country.cca3}>{country.name.common}</li>
                ))}
            </ol>
            <div className="countries">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}
                    />
                ))}
            </div>
        </>
    );
}

export default Countries;
