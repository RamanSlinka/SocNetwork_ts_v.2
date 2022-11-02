import React from 'react';
import Post from "./post/Post";

const MyPosts = () => {

    const postsData = [
        {message:'message 1', likesCount:'1', id: 1},
        {message:'message 2', likesCount:'3', id: 2},
    ]
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button> New post</button>
               </div>
            {postsData.map((post) => (
                <Post message={post.message} likesCount={post.likesCount} key={post.id} />

            ))}

        </div>
    );
};

export default MyPosts;