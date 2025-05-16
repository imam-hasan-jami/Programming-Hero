import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {

    const initialUser = useLoaderData();
    const [user, setUser] = useState(initialUser);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };

        fetch(`http://localhost:3000/users/${user._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              console.log("update done", data);
              const updatedUser = { ...user, name, email };
              setUser(updatedUser);
            }
          });
    }

    return (
        <div>
            <div>
                <h3>User Name: {user.name}</h3>
                <h4>Email: {user.email}</h4>
            </div>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' defaultValue={user.name} />
                <br />
                <input type="email" name='email' defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;