import React, { use } from "react";

const Blogs = ({ blogsPromise }) => {
    const blogs = use(blogsPromise);

    return (
        <div>
            <h1 className="text-2xl">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;
