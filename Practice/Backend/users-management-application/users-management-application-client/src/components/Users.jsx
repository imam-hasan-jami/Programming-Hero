import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };

        //create user in the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('new user from server', data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                e.target.reset();
            })
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Add User" />
            </form>

            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;