import React from 'react';
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button> New post</button>
               </div>
            <Post message='message 1' likesCount='1' />
            <Post message='message 2' likesCount='2' />
        </div>
    );
};

export default MyPosts;