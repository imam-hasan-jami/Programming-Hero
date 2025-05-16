import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();

    return (
        <div>
            <h3>User Name: {user.name}</h3>
            <h4>Email: {user.email}</h4>
        </div>
    );
};

export default UserDetails;