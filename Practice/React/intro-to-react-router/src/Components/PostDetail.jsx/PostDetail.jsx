import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const navigate = useNavigate();

    return (
        <div>

            <button onClick={() => navigate(-1)}>Go Back</button>

            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg'>
                <div className='flex gap-2'>
                    <p className='font-bold text-xl bg-blue-400 w-10 h-10 rounded-full'>{id}</p>
                    <h3 className='text-xl font-bold'>{title}</h3>
                </div>
                <p className='text-left ml-8 mt-4'>{body}</p>
            </div>
        </div>
    );
};

export default PostDetail;