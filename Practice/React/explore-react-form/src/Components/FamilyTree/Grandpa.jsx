import React from 'react';
import Father from './Father';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Father asset={asset} />
                <Uncle />
                <Aunt asset={asset} />
            </section>
        </div>
    );
};

export default Grandpa;