import React, { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ blogsPromise, handleBookmark, handleMarkAsRead }) => {
    const blogs = use(blogsPromise);

    return (
        <div>
            <h1 className="text-2xl">Blogs: {blogs.length}</h1>

            <div className="all-blogs grid grid-cols-1 gap-7">
                {blogs.map((blog) => (
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
