import React from 'react';

const User2 = ({ user }) => {
    const {name, email, phone} = user;

    return (
        <div>
            <div>
            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg'>
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                {/* <div className='bg-green-400 p-2 rounded-lg mt-2'>
                    <Link to={`/users/${id}`}>Show Details</Link>
                </div> */}
            </div>
        </div>
        </div>
    );
};

export default User2;