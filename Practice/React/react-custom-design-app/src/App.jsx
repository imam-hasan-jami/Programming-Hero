import DaisyNavbar from "./Components/DaisyNavbar/DaisyNavbar";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import MarksChart from "./Components/MarksChart/MarksChart";
import axios from "axios";

const pricingPromise = fetch("pricingData.json").then(res => res.json());
const marksPromise = axios.get("marksData.json");

function App() {
    return (
        <>
            <Navbar />
            {/* <DaisyNavbar /> */}
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <PricingOptions pricingPromise={pricingPromise} />
            </Suspense>

            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <MarksChart marksPromise={marksPromise} />
            </Suspense>

            <ResultsChart />
        </>
    );
}

export default App;
