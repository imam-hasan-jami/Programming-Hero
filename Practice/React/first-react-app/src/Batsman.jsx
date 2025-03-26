import { useState } from "react";

function Batsman() {
    const [runs, setRuns] = useState(0);

    const [singles, setSingles] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);
    // const [reset, setReset] = useState(0);

    const handleSingle = () => {
        const newRuns = runs + 1;
        const updateSingles = singles + 1;
        setSingles(updateSingles);
        setRuns(newRuns);
    };

    const handleFour = () => {
        const newRuns = runs + 4;
        const updateFours = fours + 1;
        setFours(updateFours);
        setRuns(newRuns);
    };

    const handleSix = () => {
        const newRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(newRuns);
    };

    const handleDecSingle = () => {
        const newRuns = runs - 1;
        setRuns(newRuns);
    };

    const handleReset = () => {
        const newRuns = 0;
        setRuns(newRuns);

        const newSingle = 0;
        setSingles(newSingle);

        const newFours = 0;
        setFours(newFours);

        const newSixes = 0;
        setSixes(newSixes);
    };

    return (
        <div>
            <p>Batsman: Player-One</p>
            <h3>Runs: {runs}</h3>

            {/* prettier-ignore */}
            <p>
                {runs >= 100
                    ? "Player scored century."
                    : runs >= 50
                        ? "Player scored half-century."
                        : ""}
            </p>
            {/* prettier-ignore */}

            <p>
                Singles: {singles}, Fours: {fours}, Sixes:{sixes}
            </p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <br />
            <button onClick={handleDecSingle}>Decrease Single</button>
            <button onClick={handleReset}>Reset Score</button>
        </div>
    );
}

export default Batsman;
