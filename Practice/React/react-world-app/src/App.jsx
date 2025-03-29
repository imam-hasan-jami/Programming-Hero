import { Suspense } from "react";
import Countries from "./Countries/Countries";

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    return response.json();
};

const countriesPromise = fetchCountries();

function App() {
    return (
        <>
            <Suspense fallback={<h3>Countries are loading...</h3>}>
                <Countries countriesPromise={countriesPromise} />
            </Suspense>
        </>
    );
}

export default App;
