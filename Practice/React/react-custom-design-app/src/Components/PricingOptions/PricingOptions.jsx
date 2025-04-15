import React, { use } from 'react';
import DaisyPriceCard from '../DaisyPriceCard/DaisyPriceCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);

    return (
        <div className='mt-40'>
            <h2 className='text-3xl font-bold ml-6'>Get our Membership</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    pricingData.map(pricing => <DaisyPriceCard key={pricing.id} pricing={pricing}/>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;