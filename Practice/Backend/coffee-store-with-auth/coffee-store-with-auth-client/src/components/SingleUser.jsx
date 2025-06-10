import React from 'react';
import { useLoaderData } from 'react-router';

const SingleUser = () => {

    const user = useLoaderData();

    return (
      <div>
        <h2 className="text-2xl font-semibold text-center text-green-800 my-5">
          User Details
        </h2>
        <div className="card w-full max-w-md mx-auto bg-base-100 shadow-xl p-5">
          <p className="text-lg font-medium">Name: {user.name}</p>
          <p className="text-lg font-medium">Email: {user.email}</p>
        </div>
      </div>
    );
};

export default SingleUser;