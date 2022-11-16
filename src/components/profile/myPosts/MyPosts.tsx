import React, {FC} from 'react';
import Post from "./post/Post";
import {addPost, PostType, updateNewPostText} from "../../../ redux/profileReducer";
import {ActionsType} from "../../../ redux/redux-store";
import {useDispatch} from "react-redux";


type MyPostsType = {
    posts: PostType[]

    newPostText: string | undefined

}


const MyPosts: FC<MyPostsType> = ({
                                      posts,
                                      newPostText,
                                  }) => {


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const dispatch = useDispatch()
    const onPostChange = () => {
        const text: string | undefined = newPostElement.current?.value
        dispatch(updateNewPostText(text))
    }
    const addPostHandler = () => {
        dispatch(addPost())

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