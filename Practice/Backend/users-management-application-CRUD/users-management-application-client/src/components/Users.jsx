import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };

        //create user in the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('new user from server', data);
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert("User added successfully");
                    e.target.reset();
                }
            })
    }

    const handleDeleteUser = (id) => {
      // console.log("button clicked", id);
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            if (data.deletedCount) {
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
                console.log("after delete user", data);
            }
        });
    };

    return (
      <div>
        <h1>Total Users: {users.length}</h1>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="Name" />
          <br />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <input type="submit" value="Add User" />
        </form>

        <div>
          {users.map((user) => (
            <p key={user._id}>
              {user.name} : {user.email}
              <Link to={`/users/${user._id}`}>Details</Link>
              <Link to={`/update/${user._id}`}>Edit</Link>
              <button onClick={() => handleDeleteUser(user._id)}>X</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Users;