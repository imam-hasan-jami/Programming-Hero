function ToDo({task, time, isDone}) {
    // return(
    //     <>
    //         <p>Done: {task}, Duration: {time}</p>
    //     </>
    // )
    if (isDone) {
        return <p>Done: {task}, Duration: {time}</p>
    }

    return <p>To be done: {task}, Time need: {time}</p>
}

export default ToDo