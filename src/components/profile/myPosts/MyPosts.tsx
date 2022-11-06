import React, {FC, PropsWithChildren, ReactNode, useEffect} from 'react';
import Post from "./post/Post";
import {PostType, updateNewPostText} from "../../../ redux/state";


type MyPostsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}


const MyPosts: FC<MyPostsType> = ({
                                      posts, addPost,
                                      newPostText, updateNewPostText
                                  }) => {


    const newPostElement: React.RefObject<any> = React.createRef();
    const addPostHandler = () => {
        addPost()
        updateNewPostText('')
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        updateNewPostText(text)

    }


    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea ref={newPostElement}
                          value={newPostText}
                          onChange={onPostChange}
                />
                <button onClick={addPostHandler}> New post</button>
            </div>
            {posts.map((post: PostType) => (
                <Post message={post.message} likesCount={post.likesCount} key={post.id}/>

            ))}

        </div>
    );
};

export default MyPosts;