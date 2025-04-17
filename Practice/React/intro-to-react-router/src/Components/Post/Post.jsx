import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const {id ,title} = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        // navigate('/')
        // navigate('/laptops')
        navigate(`/posts/${id}`)
    }

    return (
        <div>
            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg text-left'>
                <h3 className='font-bold text-lg'>{title}</h3>
                <Link to={`/posts/${id}`}>
                    <button>Show Details</button>
                </Link>
                <button onClick={handleNavigate} className='text-white'>Details of: {id}</button>
            </div>
        </div>
    );
};

export default Post;