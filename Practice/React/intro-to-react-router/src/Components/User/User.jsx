import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);

    const {id, name, email, phone} = user;
    
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
    const [visitHome, setVisitHome] = useState(false);
    if(visitHome) {
        return <Navigate to="/" />
    }

    return (
        <div>

            <button onClick={() => setVisitHome(true)} className='mt-5'>Go to Home</button>

            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg'>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <div className='bg-green-400 p-2 rounded-lg mt-2'>
                    <Link to={`/users/${id}`}>Show Details</Link>
                </div>
                <button onClick={() => setShowInfo(!showInfo)} className='text-blue-400'>{showInfo ? "Hide" : "Show"} Info</button>
                {
                    showInfo && <Suspense fallback={<span><h3>Loading...</h3></span>}>
                        <UserDetails2 userPromise={userPromise} />
                    </Suspense>
                }
            </div>
        </div>
    );
};

export default User;