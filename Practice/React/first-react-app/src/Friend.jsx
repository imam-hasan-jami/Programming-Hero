function Friend({ friend }) {
    // using destructure || not dot notation
    const { name, username, email, phone } = friend;

    return (
        <div>
            <h4>Name: {name}</h4>
            <h5>Username: {username}</h5>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default Friend;
