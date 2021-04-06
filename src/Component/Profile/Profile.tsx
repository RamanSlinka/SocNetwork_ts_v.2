import React from "react";
import s from './Profile.module.css'
import MyPosts from "./My posts/My posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export default function Profile(props: any) {
    return (
        <div className={s.content}>
           <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

