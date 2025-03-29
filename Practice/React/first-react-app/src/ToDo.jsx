function ToDo({task, time, isDone}) {
    // return(
    //     <>
    //         <p>Done: {task}, Duration: {time}</p>
    //     </>
    // )

    // **conditional rendering: 1 (if else)
    if (isDone) {
        return <p>Done: {task}, Duration: {time}</p>
    } else {
        return <p>To be done: {task}, Time need: {time}</p>
    }

    // **conditional rendering: 1 (if else) another version
    // if (isDone) {
    //     return null
    // } else {
    //     return <p>To be done: {task}, Time need: {time}</p>
    // }

    // **conditional rendering: 2 (if) no need of else, if the statement is false, it will return the false without the need of else statement.
    // if (isDone) {
    //     return <p>Done: {task}, Duration: {time}</p>
    // }
    // return <p>To be done: {task}, Time need: {time}</p>

    // **conditional rendering: 3 (ternary operator)
    // return isDone ? <p>Done: {task}, Duration: {time}</p> : <p>To be done: {task}, Time need: {time}</p>

    // **conditional rendering: 4 (using and(&&) operator) will show the true statement
    // return isDone && <p>Done: {task}, Duration: {time}</p>

    // **conditional rendering: 5 (using or(||) operator) will show the false statement
    // return isDone || <p>To be done: {task}, Time need: {time}</p>

    
}

export default ToDo