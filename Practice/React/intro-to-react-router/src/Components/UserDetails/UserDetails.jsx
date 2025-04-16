import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const {name, username, email, phone, website} = user;

    return (
        <div>
            <h3>User Details Here 👇</h3>

            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg'>
                <h3 className='font-bold'>Name: {name}</h3>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default UserDetails;