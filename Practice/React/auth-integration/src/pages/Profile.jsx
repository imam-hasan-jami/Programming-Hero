import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext);

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h3 className='text-3xl'>User Email: {user.email}</h3>
        </div>
    );
};

export default Profile;