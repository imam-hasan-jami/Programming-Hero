import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Father = ({asset}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <Myself asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;