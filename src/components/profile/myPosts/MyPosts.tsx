import React, {FC} from 'react';
import Post from "./post/Post";
import {ActionsType, addPost, PostType, updateNewPostText} from "../../../ redux/state";


type MyPostsType = {
    posts: PostType[]
    dispatch: (action: ActionsType) => void
    newPostText: string | undefined

}


const MyPosts: FC<MyPostsType> = ({
                                      posts, dispatch,
                                      newPostText,
                                  }) => {


    const newPostElement = React.createRef<HTMLTextAreaElement>();


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