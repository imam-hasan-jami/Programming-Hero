import { Suspense, useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

const fetchBlogs = async () => {
    const response = await fetch("blogs.json");
    return response.json();
};

const blogsPromise = fetchBlogs();

function App() {
    const [bookmarked, setBookmarked] = useState([]);

    const handleBookmark = (blog) => {
        setBookmarked([...bookmarked, blog]);
    };

    return (
        <>
            <Navbar />

            <div className="main-container flex">
                <div className="left-container w-[70%]">
                    <Suspense fallback={<h3>Blogs are loading...</h3>}>
                        <Blogs
                            blogsPromise={blogsPromise}
                            handleBookmark={handleBookmark}
                        />
                    </Suspense>
                </div>
                <div className="right-container w-[30%]">
                    <h1>Reading time: 0</h1>
                    <h1>Bookmark count: 0</h1>

                    {bookmarked.map((marked) => (
                        <p className="text-lg mt-4">{marked.title}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
