import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
            <Marquee className='flex gap-5' speed={60} pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum a dolores iste fuga, corporis voluptatibus, repudiandae nobis nisi consectetur quos aliquid provident. Unde inventore nobis, laboriosam molestias dolore sequi quaerat.</p>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum a dolores iste fuga, corporis voluptatibus, repudiandae nobis nisi consectetur quos aliquid provident. Unde inventore nobis, laboriosam molestias dolore sequi quaerat.</p>
                <p className='font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum a dolores iste fuga, corporis voluptatibus, repudiandae nobis nisi consectetur quos aliquid provident. Unde inventore nobis, laboriosam molestias dolore sequi quaerat.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;