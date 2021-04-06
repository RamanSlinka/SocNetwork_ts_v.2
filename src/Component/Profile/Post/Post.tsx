import React from "react";
import s from './Post.module.css'
import {MyPostsPropsType} from "../My posts/My posts";

export default function Post(props:any) {
    return (
        <div className={s.post}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"/>
            {props.message}
            <div>
                <span>like </span>
                <span>{ props.likesCounts}</span>

            </div>
        </div>

    )
}