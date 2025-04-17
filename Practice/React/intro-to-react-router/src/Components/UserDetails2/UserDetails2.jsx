import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const user = use(userPromise);

    const {name, username} = user;

    return (
        <div>
            <p>username: {username}</p>
            <p>name: {name}</p>
        </div>
    );
};

export default UserDetails2;