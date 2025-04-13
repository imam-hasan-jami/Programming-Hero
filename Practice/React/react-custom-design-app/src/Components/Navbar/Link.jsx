import React from 'react';

const Link = ({ route }) => {
    return (
        
        <li className='px-5 py-2'><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;