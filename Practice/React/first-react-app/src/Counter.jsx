import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    return (
        <div>
            <h3>Count: {count} </h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Counter;