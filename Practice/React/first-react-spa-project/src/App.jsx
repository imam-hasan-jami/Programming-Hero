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
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = (blog) => {
        setBookmarked([...bookmarked, blog]);
    };

    const handleMarkAsRead = (time) => {
        const newTime = readingTime + time;
        setReadingTime(newTime);
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
                            handleMarkAsRead={handleMarkAsRead}
                        />
                    </Suspense>
                </div>
                <div className="right-container w-[30%]">
                    <h1>Reading time: {readingTime}</h1>
                    <h1>Bookmark count: {bookmarked.length}</h1>

                    {bookmarked.map((marked) => (
                        <p className="text-lg mt-4">{marked.title}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
