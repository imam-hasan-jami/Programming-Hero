import { Suspense } from "react";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

const fetchBlogs = async () => {
    const response = await fetch("blogs.json");
    return response.json();
};

const blogsPromise = fetchBlogs();

function App() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<h3>Blogs are loading...</h3>}>
                <Blogs blogsPromise={blogsPromise} />
            </Suspense>
        </>
    );
}

export default App;
