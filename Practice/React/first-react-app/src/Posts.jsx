import { use } from "react";
import Post from "./Post";

function Posts({ postsPromise }) {
    const posts = use(postsPromise);

    return (
        <div>
            <h2>{posts.length} posts are here.</h2>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
}

export default Posts;
