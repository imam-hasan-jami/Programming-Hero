import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Phones = () => {
    const phonesData = useLoaderData();
    return (
      <div>
        <h2>All phones here: {phonesData.length}</h2>
        {phonesData.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </div>
    );
};

export default Phones;