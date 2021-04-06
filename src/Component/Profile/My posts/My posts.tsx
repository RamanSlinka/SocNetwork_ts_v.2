import React from "react";
import s from './MyPostc.module.css'
import Post from "../Post/Post";

export type MyPostsPropsType = {
    message: string
    likesCounts: number
}

export default function MyPosts(props: any) {
    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div className={s.MyPosts}>
                <textarea></textarea><br/>
                <button>Send</button>
            </div>
            <div className={s.posts}>
                <Post message={'how are you?'} likesCounts={12}/>
                <Post  message={'ho ho hoh!'} likesCounts={24}/>
                <Post message={'LoL'} likesCounts={0}/>
                <Post message={'LoL'} likesCounts={0}/>
                <Post message={'LoL'} likesCounts={0}/>



            </div>
        </div>

    )
}