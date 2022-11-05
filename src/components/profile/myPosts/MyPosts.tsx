import React, {FC, PropsWithChildren, ReactNode} from 'react';
import Post from "./post/Post";
import {PostType} from "../../../ redux/state";



type MyPostsType = PostType[]


const MyPosts:FC<{posts: MyPostsType }> = ({posts}) => {

    console.log(posts)

    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button> New post</button>
               </div>
            { posts.map((post: PostType) => (
                <Post message={post.message} likesCount={post.likesCount} key={post.id} />

            ))}

        </div>
    );
};

export default MyPosts;