import React from 'react';
import { useLoaderData } from 'react-router';

const Phone = () => {
    const phoneData = useLoaderData();
    return (
        <div>
            <h1>{phoneData.name}</h1>
            <img src={phoneData.image} alt="" />
        </div>
    );
};

export default Phone;