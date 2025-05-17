import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {

    const initialCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-24 py-12'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee} />)
                }
            </div>
        </div>
    );
};

export default Home;