function Post({ post }) {
    return (
        <div>
            <h3>Title: {post.title}</h3>
            <p>Post: {post.body}</p>
        </div>
    );
}

export default Post;
