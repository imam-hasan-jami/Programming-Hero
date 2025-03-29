import { useEffect, useState } from "react";

function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setPlayers(data));
    }, []);

    return (
        <div>
            <h4>Players: {players.length}</h4>

            {/* prettier-ignore */}
            <ol>
                {
                    players.map((player) => (<li>{player.name}</li>))
                }
            </ol>
            {/* prettier-ignore */}

        </div>
    );
}

export default Players;