import React, { use } from 'react';
import User2 from '../User2/User2';

const Users2 = ({ usersPromise }) => {
    const users = use(usersPromise);

    return (
        <div>
            <h3>This is Users2 page</h3>

            <div>
            {
                users.map(user => <User2 key={user.id} user={user} />)
            }
            </div>
        </div>
    );
};

export default Users2;