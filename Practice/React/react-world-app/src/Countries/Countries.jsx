import { use } from "react";
import Country from "../Country/Country";

function Countries({ countriesPromise }) {
    const countries = use(countriesPromise);

    return (
        <>
            <h2>Number of Countries: {countries.length}</h2>
            {
                countries.map(country => <Country country={country}/>)
            }
        </>
    );
}

export default Countries;
