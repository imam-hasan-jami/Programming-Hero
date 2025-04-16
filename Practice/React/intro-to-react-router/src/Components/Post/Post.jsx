import React from 'react';

const Post = ({ post }) => {
    const {title, body} = post;

    return (
        <div>
            <div className='bg-orange-100 text-black border-2 border-amber-300 p-5 m-5 rounded-lg text-left'>
                <h3 className='font-bold text-lg'>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Post;