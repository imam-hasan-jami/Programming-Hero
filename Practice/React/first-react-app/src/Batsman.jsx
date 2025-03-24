import { useState } from "react";

function Batsman() {
    const [runs, setRuns] = useState(0);

    const [singles, setSingles] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

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

    return (
        <div>
            <p>Batsman: Player-One</p>
            <h3>Runs: {runs}</h3>
            <p></p>
            <p>
                Singles: {singles}, Fours: {fours}, Sixes:{sixes}
            </p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
}

export default Batsman;
