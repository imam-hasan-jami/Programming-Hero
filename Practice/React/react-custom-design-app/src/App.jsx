import DaisyNavbar from "./Components/DaisyNavbar/DaisyNavbar";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";

const pricingPromise = fetch("pricingData.json").then(res => res.json());

function App() {
    return (
        <>
            <Navbar />
            {/* <DaisyNavbar /> */}
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <PricingOptions pricingPromise={pricingPromise} />
            </Suspense>

            <ResultsChart />
        </>
    );
}

export default App;
