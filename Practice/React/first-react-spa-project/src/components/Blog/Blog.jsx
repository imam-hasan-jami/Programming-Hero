import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={blog.cover} alt="Blog thumbnails" />
                </figure>
                <div className="card-body">
                    <div className="author flex justify-start items-center gap-4 mb-5">
                        <img className="w-15" src={blog.author_img} alt="" />
                        <h2 className="text-xl font-bold">{blog.author}</h2>
                        <button onClick={() => handleBookmark(blog)}>
                            <FaBookmark size={20} />
                        </button>
                    </div>

                    <h2 className="card-title text-2xl font-semibold">
                        {blog.title}
                    </h2>
                    <div className="text-right">
                        {blog.hashtags.map((hash) => (
                            <p className="text-lg">{hash}</p>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
                    className="bg-purple-800 rounded-lg p-2 mx-auto my-2 w-[50%] text-white font-bold underline"
                >
                    Mark as Read
                </button>
            </div>
        </div>
    );
};

export default Blog;
