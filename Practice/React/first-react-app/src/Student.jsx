// alternative of PropTypes as this library was removed from React core library

function Student({name = "Guest", age = 0, isStudent = false}) {
    return(
        <>
            <div className="student">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>isStudent: {isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default Student